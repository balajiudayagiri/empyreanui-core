import mongoose, { Schema } from "mongoose";

import { v4 } from "uuid";

/**
 * User Schema definition for the Empyrean application.
 *
 * This schema defines the structure of the user documents in the MongoDB database.
 * It includes fields for user information, roles, verification status, and more.
 *
 * @constant {Schema} usersSchema
 */
const usersSchema = new mongoose.Schema(
  {
    /**
     * The user's first name.
     *
     * @type {String}
     * @required
     */
    firstname: {
      type: String,
      trim: true,
      required: [true, "Please add the Name"],
    },

    /**
     * The user's last name.
     *
     * @type {String}
     * @required
     */
    lastname: {
      type: String,
      trim: true,
      required: [true, "Please add the Name"],
    },

    /**
     * The URL of the user's avatar image.
     *
     * @type {String}
     */
    avatar_url: {
      type: String,
      trim: true,
    },

    /**
     * The user's email address.
     *
     * Must be unique for each user.
     *
     * @type {String}
     * @required
     * @unique
     */
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Please add the email address"],
    },

    /**
     * The role of the user.
     *
     * Possible values: "ADMIN", "USER".
     * Defaults to "USER".
     *
     * @type {String}
     * @default "USER"
     * @enum {String}
     */
    user_role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },

    /**
     * Indicates whether the user has been verified.
     *
     * @type {Boolean}
     * @default false
     */
    is_verified: {
      type: Boolean,
      default: false,
      required: true,
    },

    /**
     * The unique verification ID for the user.
     *
     * Generated using UUID v4.
     *
     * @type {String}
     * @unique
     * @required
     * @default v4
     */
    verification_id: {
      type: String,
      default: v4,
      unique: true,
      required: true,
    },

    /**
     * The user's username.
     *
     * Must be unique for each user.
     *
     * @type {String}
     * @required
     * @unique
     */
    username: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Please add the username"],
    },

    /**
     * The user's password.
     *
     * @type {String}
     * @required
     */
    password: {
      type: String,
      trim: true,
      required: [true, "Please add the password"],
    },

    /**
     * Indicates if password change is allowed.
     *
     * @type {Boolean}
     * @default false
     */
    pass_change_allowed: {
      type: Boolean,
      default: false,
    },

    /**
     * Array of ObjectIds referencing the user's blog posts.
     *
     * @type {Array<Schema.Types.ObjectId>}
     */
    blog_ids: [
      {
        type: Schema.Types.ObjectId,
      },
    ],

    /**
     * Array of ObjectIds referencing components associated with the user.
     *
     * @type {Array<Schema.Types.ObjectId>}
     */
    component_ids: [
      {
        type: Schema.Types.ObjectId,
      },
    ],

    /**
     * Array of user logs, tracking activities and events.
     *
     * Each log contains:
     * - `event`: The type of event (e.g., "login", "register").
     * - `description`: A description of the event.
     * - `time`: The timestamp of the event.
     *
     * @type {Array<Object>}
     * @property {String} event - The type of event.
     * @property {String} description - A description of the event.
     * @property {String} time - The timestamp of the event.
     */
    user_logs: [
      {
        event: { type: String, required: true },
        description: { type: String, required: true },
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

/**
 * The User model based on the usersSchema.
 *
 * Uses the schema to create and manage user documents in MongoDB.
 *
 * @constant {Model}
 */
export default mongoose.models.empyrean_user ||
  mongoose.model("empyrean_user", usersSchema);
