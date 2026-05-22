// controllers/SpiceController.js

const Spice = require("../Models/Spice.Model");

// GET all spices
exports.getSpices = async (req, res) => {
  try {
    const spices = await Spice.find();

    res.status(200).json({
      success: true,
      message: "Spices fetched successfully",
      data: spices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching spices",
      error: error.message,
    });
  }
};

// POST add new spice
exports.addSpice = async (req, res) => {
  try {
    const { name, image, description } = req.body;

    const newSpice = await Spice.insertMany({
      name,
      image,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Spice added successfully",
      data: newSpice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding spice",
      error: error.message,
    });
  }
};