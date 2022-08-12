import { inject, injectable } from "tsyringe";
import { ICreateSpecificationDTO } from "../../repositories/dtos/ICreateSpecificationDTO";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

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
      throw new Error("Specification already exists ");
    }

    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
