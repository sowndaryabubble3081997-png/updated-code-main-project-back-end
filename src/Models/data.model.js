// ===============================
// 1. models/CommentModel.js
// ===============================

const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("data", dataSchema);