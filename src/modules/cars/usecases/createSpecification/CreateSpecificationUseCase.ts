import { response } from "express";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../repositories/ISpecificationRepository";

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}
  handle({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists ");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
