import express from "express";
import mongoose from "mongoose";

const app = express();

// temporary
const PORT = 8800;
// -----------------

app.listen(PORT, () => {
  console.log("Server Running");
});
