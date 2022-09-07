import { AuthenticateUserController } from "@modules/accounts/usecases/authenticateUser/AuthenticateUserController";
import { Router } from "express";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
authenticateRoutes.post("/session", authenticateUserController.handle);

export { authenticateRoutes };
