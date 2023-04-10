import express from "express";
import mongoose from "mongoose";

const app = express();

// temporary
const PORT = 8800;
// -----------------

try {
  await mongoose.connect(conn_url);
  console.log("Connected");
} catch (error) {
  handleError(error);
}

app.listen(PORT, () => {
  console.log("Server Running");
});
