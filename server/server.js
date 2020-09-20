const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// That's a really bad API. We're storing the user's text on the server itself
// because this app will NEVER be used by more than one person at the same time.
let userText = "nothing yet";

// Endpoint used to save results for analysis.
app.post("/api/submit", (request, response) => {

	userText = request.body.userText;
	response.send({ data: "All good! Proceed."});
});

// Endpoint used to retrieve results.
app.get("/api/results", (request, response) => {

	response.send({ userText });
});

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
})
