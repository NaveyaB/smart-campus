const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Smart Campus API Running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});