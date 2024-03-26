// Imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require("cors");

mongoose.connect("mongodb://localhost/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mainRoutes = require("./routes/main");
app.use(mainRoutes);

app.listen(5000, () => {
  console.log("Node.js Listening on port 5000");
});
