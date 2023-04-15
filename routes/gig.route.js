import express from "express";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", verifyToken, getGig);
router.get("/", verifyToken, getGigs);

export default router;
