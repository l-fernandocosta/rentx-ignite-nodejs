import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async handle(): Promise<Specification[]> {
    const allSpecifications = await this.specificationRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationsUseCase };
