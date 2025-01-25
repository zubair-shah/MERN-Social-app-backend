import express from "express";
import {
  createUserController,
  getAllUsersController,
  LoginUser,
} from "#controllers/UserController/index";
const router = express.Router();
// ==================create-user-route====================
router.post("/createuser", createUserController);
// ==================get-all-users-route====================
router.get("/get-all-users", getAllUsersController);
// ======================LoginUser===============
router.post("/login", LoginUser);

export default router;
