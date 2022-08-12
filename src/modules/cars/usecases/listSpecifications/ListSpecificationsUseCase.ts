import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

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
