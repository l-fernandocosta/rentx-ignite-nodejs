import { Router } from "express";
import { createCategoryController } from "../modules/cars/usecases/createCategory";
import { listCategoriesController } from "../modules/cars/usecases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
