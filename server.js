import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
import userRoute from "./routes/user.route.js";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.conn_url);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/users", userRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log("Server Running");
});
