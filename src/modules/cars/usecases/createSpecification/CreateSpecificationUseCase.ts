import { AppErrors } from "@shared/errors/AppErrors";
import { ICreateSpecificationDTO } from "@modules/cars/repositories/dtos/ICreateSpecificationDTO";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async handle({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppErrors(401, "Specification already exists ");
    }

    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
