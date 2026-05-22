const express = require("express");
const Commentrouter = express.Router();
console.log("comment level request recived");

const {
  createComment,
  getAllComments,
  updateComment,
  deleteComment,
} = require("../Controllers/Comment.controller");


// POST
Commentrouter.post("/add-comment", createComment);

// GET
Commentrouter.get("/get-comments", getAllComments);

// PUT
Commentrouter.put("/update-comment/:id", updateComment);

// DELETE
Commentrouter.delete("/delete-comment/:id", deleteComment);

module.exports = Commentrouter;
