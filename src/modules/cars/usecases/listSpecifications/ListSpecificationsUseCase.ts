import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  handle(): Specification[] {
    const allSpecifications = this.specificationRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationsUseCase };
