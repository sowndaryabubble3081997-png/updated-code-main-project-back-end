const Comment= require("../Models/Comment.model")
// CREATE COMMENT (POST)
exports.createComment = async (req, res) => {
  try {
    const { username, message } = req.body;

    const newComment = new Comment({
      username,
      message,
    });

    await newComment.save();

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: newComment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL COMMENTS (READ)
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: comments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE COMMENT (PUT)
exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, message } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      {
        username,
        message,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Comment updated successfully",
      data: updatedComment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE COMMENT (DELETE)
exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    await Comment.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
