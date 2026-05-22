const express = require("express");
// const cors = require("cors");
const logger = require("morgan");
const connectDB = require("./src/Config/db.Config");




const app = express();

connectDB();



app.use(logger("dev"));
app.use(express.json());



app.listen(8000, () => {
  console.log("Server running on port 8000");
});

module.exports = app;