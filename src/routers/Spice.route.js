const express = require("express");
const SpiceRouter = express.Router();
console.log("spice level requested");

const {
  getSpices,
  addSpice,
} = require("../Controllers/Spice.Controller");

// GET
SpiceRouter.get("/get-spices", getSpices);

// POST
SpiceRouter.post("/add-spice", addSpice);

module.exports = SpiceRouter;