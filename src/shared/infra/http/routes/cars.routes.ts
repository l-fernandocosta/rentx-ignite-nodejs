import { CreateCarController } from "@modules/cars/usecases/createCar/CreateCarController";
import { Router } from "express";

const carsRoutes = Router();
const createCarController = new CreateCarController();

carsRoutes.post("/", createCarController.handle);

export { carsRoutes };
