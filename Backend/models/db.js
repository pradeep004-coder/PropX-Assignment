import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoURL = process.env.MONGO_URI;

const connectDB = () => (
  mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.info("MongoDB Connection Successful.");
  }).catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  })
);

export default connectDB;