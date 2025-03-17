import mongoose, { Schema, Document } from "mongoose";

export interface ITwitter extends Document {
    username: string;
    tweet: string;
    timestamp: Date;
}

const TwitterSchema = new Schema<ITwitter>({
    username: { type: String, required: true },
    tweet: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Twitter || mongoose.model<ITwitter>("Twitter", TwitterSchema);
