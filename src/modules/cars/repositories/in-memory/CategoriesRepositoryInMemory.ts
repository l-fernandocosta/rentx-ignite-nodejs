import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  private categories: Category[] = [];

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = await new Category();

    Object.assign(category, {
      name: name,
      description: description,
    });

    this.categories.push(category);
  }
  async findByName(name: string): Promise<Category> {
    const category = await this.categories.find(
      (category) => category.name === name
    );
    return category;
  }
  async list(): Promise<Category[]> {
    const categories = await this.categories;
    return categories;
  }
}

export { CategoriesRepositoryInMemory };
