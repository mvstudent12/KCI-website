const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

// Serve static files from the "public" directory
app.use(express.static("./KCI Website"));

// Define the route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "KCI Website", "index.html"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
