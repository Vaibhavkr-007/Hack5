import mongoose, { Schema, Document } from "mongoose";

export interface IEmail extends Document {
    subject: string;
    sender: string;
    content: string;
    timestamp: Date;
}

const EmailSchema = new Schema<IEmail>({
    subject: { type: String, required: true },
    sender: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Email || mongoose.model<IEmail>("Email", EmailSchema);
