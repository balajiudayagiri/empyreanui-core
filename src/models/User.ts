import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  userID: string;
  firstName: string;
  lastName: string;
  componentIDs: { componentID: string; updatedAt: Date }[];
}

const userSchema: Schema<IUser> = new Schema({
  userID: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  componentIDs: [
    {
      componentID: { type: String, required: true },
      updatedAt: { type: Date, default: Date.now },
    },
  ],
});

userSchema.pre("save", function (next) {
  if (this.isModified("componentIDs")) {
    this.componentIDs.forEach((component) => {
      component.updatedAt = new Date();
    });
  }
  next();
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
