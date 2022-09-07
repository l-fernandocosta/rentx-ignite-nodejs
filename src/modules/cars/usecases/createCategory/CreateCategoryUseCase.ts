import { AppErrors } from "@shared/errors/AppErrors";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { injectable, inject } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppErrors(401, "Category already exists !");
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
