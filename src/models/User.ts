import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";

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
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
