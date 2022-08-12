import { Repository } from "typeorm";
import { AppDataSource } from "../../../../data-source";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO } from "../dtos/ICreateSpecificationDTO";
import { ISpecificationRepository } from "../ISpecificationRepository";

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
