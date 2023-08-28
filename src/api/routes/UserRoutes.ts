import express from "express";
import { getUsers, deleteUser , putUser , postUser } from "../controller/UserCtrl";
const {isAuth, isAdmin} = require("../../middlewares/auth")

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", postUser);
userRouter.put("/:id", putUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
