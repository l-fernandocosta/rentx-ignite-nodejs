import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const allCategories = await this.categoryRepository.list();
    return allCategories;
  }
}

export { ListCategoriesUseCase };
