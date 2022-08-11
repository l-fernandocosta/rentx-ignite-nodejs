import { Router } from "express";
import { createSpecificationController } from "../modules/cars/usecases/createSpecification";
import { listSpecificationController } from "../modules/cars/usecases/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  createSpecificationController.execute(request, response);
});

specificationRoutes.get("/", (request, response) => {
  listSpecificationController.execute(request, response);
});

export { specificationRoutes };
