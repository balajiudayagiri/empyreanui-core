import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    require: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Blog = models.Blog || model("Blog", BlogSchema);
export default Blog;
