import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    oauthId: { type: String, required: true },  
    name: String,
    email: { type: String, required: true, unique: true },
    avatar: String,
    provider: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
