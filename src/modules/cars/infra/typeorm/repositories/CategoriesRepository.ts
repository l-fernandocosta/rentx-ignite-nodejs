import { ICreateCategoryDTO } from "@modules/cars/repositories/dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppDataSource } from "data-source";
import { Repository } from "typeorm";
import { Category } from "../entities/Category";

class CategoryRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });
    await this.repository.save(category);
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOneBy({ name });

    return category;
  }
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
}
export { CategoryRepository };
