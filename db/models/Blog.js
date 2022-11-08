import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  userId: {
    type: String,
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
