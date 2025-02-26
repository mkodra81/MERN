import express from "express";
import mongoose from "mongoose";
import UserComment from "../models/userComment.js";
import User from "../models/user.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Failed to fetch users");
  }
});

userRouter.post("/register", async (req, res) => {
  try {
    const user = req.body;

    if (!user.name || !user.email || !user.password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all fields" });
    }

    const newUser = new User(user);

    try {
      newUser.save();
      res
        .status(201)
        .json({ success: true, message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).send("Failed to register user", error);
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Failed to register user", error);
  }
});

userRouter.get("/comments", async (req, res) => {
  const movieId = req.query.movieId;

  try {
    const comments = await UserComment.find({ movie_id: movieId })
      .sort({ date: -1 })
      .limit(10);
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).send("Failed to fetch comments", error);
  }
});

userRouter.post("/user/add-comment", async (req, res) => {
  const comment = req.body;

  if (!comment.name || !comment.movie_id || !comment.text) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newComment = new UserComment(comment);

  try {
    newComment.save();
    res
      .status(201)
      .json({ success: true, message: "Comment added successfully" });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).send("Failed to add comment", error);
  }
});

userRouter.delete("/user/delete-comment/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Movie Id is required" });
  }

  try {
    const deletedComment = await UserComment.findByIdAndDelete(id);

    if (!deletedComment) {
      return res
        .status(404)
        .json({ success: false, message: "Comment not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    console.error(`Error in deleting comment: ${error.message}`);
    return res
      .status(500)
      .json({ success: false, message: "Error in deleting comment" });
  }
});

userRouter.patch("/user/edit-comment/:id", async (req, res) => {
  const { id } = req.params;
  const { text } = req.body; 

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Comment ID" });
  }

  try {
    const updatedComment = await UserComment.findByIdAndUpdate(
      id, 
      { $set: { text } }, 
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ success: false, message: "Comment not found" });
    }

    res.status(200).json({ success: true, data: updatedComment });
  } catch (error) {
    console.error(`Error updating comment: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default userRouter;
