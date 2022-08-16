import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/usecases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/usecases/listSpecifications/ListSpecificationsController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationController();

specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.execute);

specificationRoutes.get("/", listSpecificationsController.execute);

export { specificationRoutes };
