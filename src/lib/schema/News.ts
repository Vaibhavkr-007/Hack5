import mongoose, { Schema, Document } from "mongoose";

interface INews extends Document {
    title: string;
    description: string;
    source: string;
    author: string;
    url: string;
    imageUrl: string;
    publishedAt: Date;
    content: string;
    summary: String;
    categories: [String];
}

const NewsSchema = new Schema<INews>({
    title: String,
    description: String,
    source: String,
    author: String,
    url: { type: String, unique: true },
    imageUrl: String,
    publishedAt: Date,
    content: String,
    summary: String,
    categories: String,

});

// ✅ Prevent model overwrite
const News = mongoose.models.News || mongoose.model<INews>("News", NewsSchema);

export default News;
