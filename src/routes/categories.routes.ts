import { Router } from "express";
import multer from "multer";
import createCategoryController from "../modules/cars/usecases/createCategory";
import { importCategoryController } from "../modules/cars/usecases/importCategory";
import { listCategoriesController } from "../modules/cars/usecases/listCategories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});
categoriesRoutes.post("/", (request, response) => {
  createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  importCategoryController.execute(request, response);
});
export { categoriesRoutes };
