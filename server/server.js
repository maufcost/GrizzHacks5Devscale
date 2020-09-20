const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Imports the Google Cloud AutoML library
const { PredictionServiceClient } = require('@google-cloud/automl').v1;

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// That's a really bad API. We're storing the user's text on the server itself
// because this app will NEVER be used by more than one person at the same time.
let userText = "nothing yet";

async function getPrediction(text) {
  // [START automl_language_text_classification_predict]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  const projectId = '64931215136';
  const location = 'us-central1';
  const modelId = 'TCN3312487685884477440';
  const content = text;

  // Instantiates a client
  const client = new PredictionServiceClient();

  async function predict() {
    // Construct request
    const request = {
      name: client.modelPath(projectId, location, modelId),
      payload: {
        textSnippet: {
          content: content,
          mimeType: 'text/plain', // Types: 'test/plain', 'text/html'
        },
      },
    };

    const [response] = await client.predict(request);

    for (const annotationPayload of response.payload) {

      console.log(`Predicted class name: ${annotationPayload.displayName}`);
      console.log(`Predicted class score: ${annotationPayload.classification.score}`);

      return [annotationPayload.displayName, annotationPayload.classification.score ]
    }
  }

  const obj = await predict();
  return obj;
  // [END automl_language_text_classification_predict]
}

// Endpoint used to save results for analysis.
app.post("/api/submit", (request, response) => {

	userText = request.body.userText;

  // The line below should NOT be changed. It's just for safe-keeping on the client.
  // that I put this confirmation below. Nothing will read it and nothing should
  // be sent from here.
  //
  // The results should be sent inside of .get().
  response.send({ data: "POST request all good" })

});

// Endpoint used to retrieve results.
app.get("/api/results", async (request, response) => {

	const result = await getPrediction(userText);

	let obj = {
		label: result[0],
		score: Math.floor(result[1]*100)+"%"
	}

	//The code below works...
	// const obj = {
	// 	label: "thats the label",
	// 	score: "thats the score"
	// }

	response.send({ data: obj });

});

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
})
