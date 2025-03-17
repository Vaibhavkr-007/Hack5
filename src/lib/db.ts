import mongoose from "mongoose";

const MONGO_URI: string | undefined = process.env.DB;

if (!MONGO_URI) {
  throw new Error("Please define the DB environment variable inside .env.local");
}

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err: Error) => console.error("❌ MongoDB connection failed:", err));

export default mongoose;