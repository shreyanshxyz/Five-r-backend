import express from "express";
import mongoose from "mongoose";

const app = express();

// temporary
const PORT = 8800;
const conn_url =
  "mongodb+srv://admin:z4BSpx2vy5B86RJU@cluster0.zxswm0a.mongodb.net/?retryWrites=true&w=majority";
// -----------------

app.listen(PORT, () => {
  console.log("Server Running");
});
