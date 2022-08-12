import { Specification } from "../entities/Specification";
import { ICreateSpecificationDTO } from "./dtos/ICreateSpecificationDTO";

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
}

export { ISpecificationRepository };
