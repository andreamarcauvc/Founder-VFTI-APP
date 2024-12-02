const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000; // Use the PORT provided by Render

// Middleware to parse JSON bodies and serve static files
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../Public"))); // Serves the Public folder

// Serve the index.html file on root URL access
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});

// Endpoint to handle the submission
app.post("/submit", (req, res) => {
  const { founderName, startupName, email, founderType, traitDescriptions, suggestion } = req.body;

  // For now, just print the data to the console
  console.log("User Data Received:", req.body);

  // Respond back to the client with success
  res.json({ result: "success" });
});

// Start the server using the appropriate port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
