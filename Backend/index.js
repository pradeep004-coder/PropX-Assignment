import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/authRouter.js";
import connectDB from "./models/db.js";
dotenv.config();

const app = express();
const Port = process.env.PORT || 8444;

app.use(express.json()); // to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // if sending form data
app.use(cors());

connectDB();

app.use("/", router);

app.listen(Port);