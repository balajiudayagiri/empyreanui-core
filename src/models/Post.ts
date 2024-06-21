import mongoose, { Document, Model, Schema } from "mongoose";

export interface IPost extends Document {
  user: {
    firstName: string;
    lastName: string;
  };
  userID: string;
  componentName: string;
  componentCategory: string;
  code: {
    styleType: string;
    htmlCode: string;
    cssCode?: string;
    tailwindCode?: string;
  };
  description: string;
  date: Date;
}

const PostSchema: Schema = new Schema({
  user: {
    type: new Schema({
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    }),
    required: true,
  },
  userID: { type: String, required: false },
  componentName: { type: String, required: true },
  componentCategory: { type: String, required: true },
  code: {
    type: new Schema({
      styleType: { type: String, required: true },
      htmlCode: { type: String, required: true },
      cssCode: { type: String, required: false },
      tailwindCode: { type: String, required: false },
    }),
    required: true,
  },
  description: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

const Post: Model<IPost> =
  mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);

export default Post;
