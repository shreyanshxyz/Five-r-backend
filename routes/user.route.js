import express from "express";
import { deleteUser, getUser } from "../controllers/user.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("It works");
});
router.delete("/:id", deleteUser);
// router.get("/:id", getUser);

export default router;
