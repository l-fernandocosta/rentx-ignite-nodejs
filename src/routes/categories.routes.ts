import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../modules/cars/usecases/createCategory/CreateCategoryController";

import { importCategoryController } from "../modules/cars/usecases/importCategory";
import { listCategoriesController } from "../modules/cars/usecases/listCategories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
  listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  importCategoryController.execute(request, response);
});
export { categoriesRoutes };
