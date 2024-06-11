// src/models/Post.ts
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  date: Date;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Post: Model<IPost> =
  mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);

export default Post;
