import mongoose from "mongoose";

const blogCommentSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  blogId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

const BlogComment = mongoose.models.BlogComment || mongoose.model("BlogComment", blogCommentSchema);
export default BlogComment;
