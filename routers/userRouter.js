import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controller/userController";
import { onlyPublic } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPublic, editProfile);
userRouter.get(routes.changePassword, onlyPublic, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
