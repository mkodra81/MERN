import exp from "constants";
import mongoose from "mongoose";

const userCommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
},
{
  timestamps: true,
});

const UserComment = mongoose.model(
  "User-Comment",
  userCommentSchema,
  "comments"
);
export default UserComment;