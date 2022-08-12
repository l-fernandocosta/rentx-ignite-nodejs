import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/usecases/createSpecification/CreateSpecificationController";
/* import { listSpecificationController } from "../modules/cars/usecases/listSpecifications"; */

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRoutes.post("/", createSpecificationController.execute);
/* 
specificationRoutes.get("/", (request, response) => {
  listSpecificationController.execute(request, response);
}); */

export { specificationRoutes };
