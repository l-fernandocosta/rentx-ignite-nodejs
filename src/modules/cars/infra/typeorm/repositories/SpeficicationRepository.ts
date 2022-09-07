import { ICreateSpecificationDTO } from "@modules/cars/repositories/dtos/ICreateSpecificationDTO";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { AppDataSource } from "data-source";
import { Repository } from "typeorm";
import { Specification } from "../entities/Specification";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Repository<Specification>;

  constructor() {
    this.specifications = AppDataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.specifications.create({ name, description });
    await this.specifications.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.specifications.findOneBy({ name: name });
    return specification;
  }

  async list(): Promise<Specification[]> {
    const allSpecifications = await this.specifications.find();
    return allSpecifications;
  }
}

export { SpecificationRepository };
