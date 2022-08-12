import { Category } from "../../entities/Category";
import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const allCategories = this.categoryRepository.list();
    return null;
  }
}

export { ListCategoriesUseCase };
