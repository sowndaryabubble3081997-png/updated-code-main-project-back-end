const express = require("express");
const mongoose = require("mongoose");

// import model
const Category = require("../Models/AllCategory.model");

// CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    // Store data in database
    const newProduct = await Category.insertMany(req.body);

    console.log("Data stored:", newProduct);

    res.status(201).json({
      success: true,
      message: "Product data stored successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while storing product",
      error,
    });
  }
};

// GET ALL PRODUCTS + CATEGORY FILTER
const getAllProducts = async (req, res) => {
  try {
    // Query parameter
    const category = req.query.category;

    // Empty filter object
    let filter = {};

    // Apply category filter if category exists
    if (category) {
      filter.category = category;
    }

    // Fetch products
    const products = await Category.find(filter);

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};