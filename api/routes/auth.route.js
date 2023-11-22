import express from "express";
import {
  google,
  signOut,
  signin,
  signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup); //Sign-Up
router.post("/signin", signin); //Sign-In
router.post("/google", google); //Google
router.get("/signout", signOut); //Sign-Out

export default router;
