const express = require("express");

const Reciperouter = express.Router();
console.log("recipe");

const {
  addRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe,
} = require("../Controllers/Recipe.controller");


// ==============================
// ADD RECIPE
// ==============================
Reciperouter.post("/add-recipe", addRecipe);


// ==============================
// GET ALL RECIPES
// ==============================
Reciperouter.get("/get-recipes", getRecipes);


// ==============================
// UPDATE RECIPE
// ==============================
Reciperouter.put("/update-recipe/:id", updateRecipe);


// ==============================
// DELETE RECIPE
// ==============================
Reciperouter.delete("/delete-recipe/:id", deleteRecipe);


module.exports = Reciperouter;