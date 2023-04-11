import express from "express";
import { deleteUser, getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

routter.get("/test", (req, res) => {
  res.send("It works");
});
router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", getUser);

export default router;