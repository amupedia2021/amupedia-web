import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  coverImg: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  },
  numberOfComments: {
    type: Number,
    required: true,
  }
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
