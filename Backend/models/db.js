import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoURL = process.env.MONGO_URI;

const connectDB = () => (
   mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
      console.log("Connection Successful.");
  }).catch((err) => {
      console.log(err);
  })
);

export default connectDB;