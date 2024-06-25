import mongoose, { Document, Model, Schema } from "mongoose";

export interface IRating {
  _id: any;
  ratedBy: string;
  rating: number; // should be between 1-5
  comment: string;
}

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
  ratings: IRating[];
  date: Date;
}

const RatingSchema: Schema = new Schema({
  ratedBy: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
});

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
  ratings: { type: [RatingSchema], required: false, default: [] },
  date: { type: Date, default: Date.now },
});

const Post: Model<IPost> =
  mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);

export default Post;
