import { ICreateUserDTO } from "@modules/accounts/repositories/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppDataSource } from "data-source";
import { Repository } from "typeorm";
import { User } from "../entities/User";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    driver_license,
    email,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const userByEmail = this.repository.findOneBy({ email: email });
    return userByEmail;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id: id });
    return user;
  }
}

export { UserRepository };
