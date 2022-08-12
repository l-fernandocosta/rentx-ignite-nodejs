import { Category } from "../entities/Category";
import { ICreateCategoryDTO } from "./dtos/ICreateCategoryDTO";

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
}

export { ICategoriesRepository };
