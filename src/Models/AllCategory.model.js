const mongoose = require("mongoose");

// Product schema creation // structure of document
const CategorySchema = mongoose.Schema(
  {
    id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['breakfast', 'lunch', 'dinner', 'desserts'], // Validates only these 4
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String, // Stores the URL string
    required: true
  },
  recipe: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String], // Array of strings
    required: true
  }
  },
  { timestamps: true },
);
// create Product Collection Modal: Collection
const Category = mongoose.model("AllCategoryData", CategorySchema);

module.exports = Category;
