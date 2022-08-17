import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../modules/accounts/usecases/createUser/CreateUserController";
import { UpdateUsertAvatarController } from "../modules/accounts/usecases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();
const upload = multer({
  dest: "./avatar",
});
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUsertAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
  "/avatar",
  upload.single("file"),
  updateUserAvatarController.handle
);
export { usersRoutes };
