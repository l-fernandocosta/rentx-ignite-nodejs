import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/usecases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/usecases/listSpecifications/ListSpecificationsController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationController();

specificationRoutes.post("/", createSpecificationController.execute);
specificationRoutes.get("/", listSpecificationsController.execute);

export { specificationRoutes };
