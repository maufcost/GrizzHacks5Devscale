const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
	response.send("The server is working, dawg!");
});

app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
})
