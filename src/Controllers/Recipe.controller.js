const Recipe = require("../Models/Recipe .Model");


// ==============================
// ADD RECIPE
// ==============================
const addRecipe = async (req, res) => {
  try {

    const recipe = await Recipe.create(req.body);

    res.status(201).json({
      success: true,
      message: "Recipe added successfully",
      data: recipe,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// GET ALL RECIPES
// ==============================
const getRecipes = async (req, res) => {
  try {

    const recipes = await Recipe.find();

    res.status(200).json({
      success: true,
      data: recipes,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// UPDATE RECIPE
// ==============================
const updateRecipe = async (req, res) => {
  try {

    const updatedRecipe =
      await Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedRecipe) {
      return res.status(404).json({
        success: false,
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Recipe updated successfully",
      data: updatedRecipe,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==============================
// DELETE RECIPE
// ==============================
const deleteRecipe = async (req, res) => {
  try {

    const deletedRecipe =
      await Recipe.findByIdAndDelete(
        req.params.id
      );

    if (!deletedRecipe) {
      return res.status(404).json({
        success: false,
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Recipe deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {
  addRecipe,
  getRecipes,
  updateRecipe,
  deleteRecipe,
};