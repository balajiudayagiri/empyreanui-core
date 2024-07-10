import mongoose, { Schema } from "mongoose";

import { v4 } from "uuid";

const usersSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: [true, "Please add the Name"],
    },
    lastname: {
      type: String,
      trim: true,
      required: [true, "Please add the Name"],
    },
    avatar_url: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Please add the email address"],
    },
    user_role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    is_verified: {
      default: false,
      type: Boolean,
      required: true,
    },
    verification_id: {
      type: String,
      default: v4,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Please add the username"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Please add the password"],
    },
    pass_change_allowed: {
      type: Boolean,
      default: false,
    },
    blog_ids: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    component_ids: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    user_logs: [
      {
        event: { type: String, required: true },
        descriptio: { type: String, required: true },
        time: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.empyrean_users ||
  mongoose.model("empyrean_users", usersSchema);
