import express from "express";
import {
  createUserController,
  getAllUsersController,
} from "#controllers/UserController/index";
const router = express.Router();

router.post("/createuser", createUserController);
router.get("/get-all-users", getAllUsersController);

export default router;
