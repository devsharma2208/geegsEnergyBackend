import { Router } from "express";
import {
  loginUser,
  registerUser,
  updateAccountDetails,
  getAllUsers,
  deleteUser,
  getCurrentUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/current-user/:userId").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);
router.route("/delete-account/:userId").delete(verifyJWT, deleteUser);
router.route("/get-all-users").get(getAllUsers);

export default router;
