import { User } from "../entities/User";
import { ICreateUserDTO } from "./dtos/ICreateUserDTO";

interface IUsersRepository {
  create(user_info: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
