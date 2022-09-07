import { CreateCategoryController } from "@modules/cars/usecases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/usecases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/usecases/listCategories/ListCategoriesController";
import { Router } from "express";
import multer from "multer";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoriesController();
const importCategoriesController = new ImportCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoriesController.execute
);
export { categoriesRoutes };
