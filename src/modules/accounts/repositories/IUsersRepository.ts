import { ICreateUserDTO } from "./dtos/ICreateUserDTO";

interface IUsersRepository {
  create(user_info: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
