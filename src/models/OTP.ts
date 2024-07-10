import mongoose, { Schema } from "mongoose";

import { v4 } from "uuid";

const usersSchema = new mongoose.Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "empyrean_users",
      required: true,
    },
    otp: {
      type: Number,
      required: true,
    },
    expiresAt: {
      type: Date,
      default: Date.now,
      expires: 60 * 2,
    },
    user_verification_id: {
      type: String,
      ref: "empyrean_users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.OTPs || mongoose.model("OTPs", usersSchema);
