import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";

/**
 * Schema for OTP (One-Time Password) documents.
 *
 * This schema is used to store OTP details for user verification processes.
 *
 * @constant {Schema} usersSchema
 */
const usersSchema = new mongoose.Schema(
  {
    /**
     * Reference to the associated user.
     *
     * Links to the `kodeblox_users` collection.
     * This is the user for whom the OTP was generated.
     *
     * @type {Schema.Types.ObjectId}
     * @ref "kodeblox_users"
     * @required
     */
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "kodeblox_users",
      required: true,
    },

    /**
     * The one-time password (OTP) for verification.
     *
     * A numerical value used to verify user identity.
     *
     * @type {Number}
     * @required
     */
    otp: {
      type: Number,
      required: true,
    },

    /**
     * The expiry date and time of the OTP.
     *
     * Automatically set to 10 minutes from the time of creation.
     * The `expires` option ensures the OTP document is automatically removed
     * from the database after the specified time period.
     *
     * @type {Date}
     * @default Date.now
     * @expires 10 minutes
     */
    expiresAt: {
      type: Date,
      default: Date.now,
      expires: 60 * 10, // TTL for 10 minutes
    },

    /**
     * User verification ID for associating with the OTP.
     *
     * This is the verification ID from the `kodeblox_users` collection
     * that the OTP is related to.
     *
     * @type {String}
     * @ref "kodeblox_users"
     * @required
     */
    user_verification_id: {
      type: String,
      ref: "kodeblox_users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * The OTP model based on the usersSchema.
 *
 * This model is used to interact with the OTP collection in MongoDB.
 * It provides methods to create, query, and manage OTP documents.
 *
 * @constant {Model}
 */
export default mongoose.models.OTP || mongoose.model("OTP", usersSchema);
