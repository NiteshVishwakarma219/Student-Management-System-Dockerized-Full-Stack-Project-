const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Student = require("./models/Student");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://admin:password@mongo:27017/studentdb?authSource=admin"
);

app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.post("/students", async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
});

app.listen(5000, () => {
  console.log("Server Running");
});