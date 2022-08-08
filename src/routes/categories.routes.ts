import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ description, name });

  return response.status(201).json({ msg: " Success !!" });
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();
  return response.status(200).json(allCategories);
});

export { categoriesRoutes };
