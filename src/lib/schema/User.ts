import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
    fullname: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            index: 1,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

// Hash password before saving
userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Avoid redefining the model
const UserSchema: Model<IUser> =
    mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default UserSchema;
