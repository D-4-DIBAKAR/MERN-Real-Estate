import express from "express";
import {
  deleteUser,
  updateUser,
  getUserListings,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser); //Update User
router.delete("/delete/:id", verifyToken, deleteUser); //Delete User
router.get("/listings/:id", verifyToken, getUserListings); //User Listing
router.get("/:id", verifyToken, getUser); //Get User

export default router;
