import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  userID: string;
  firstName: string;
  lastName: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
} 

const userSchema: Schema<IUser> = new Schema({
  userID: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // Replace this with your preferred hashing mechanism if needed
    this.password = this.password; // No hashing
  }
  next();
});

userSchema.methods.comparePassword = function (password: string) {
  return Promise.resolve(this.password === password);
};

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
