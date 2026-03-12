const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// IMPORTANT: parse JSON body
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");

const studentRoutes = require("./routes/studentRoutes");

// routes
app.use("/api/students", studentRoutes);


app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

app.get("/", (req, res) => {
  res.send("Smart Campus API Running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});