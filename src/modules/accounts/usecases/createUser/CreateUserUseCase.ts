import { AppErrors } from "@shared/errors/AppErrors";
import { ICreateUserDTO } from "@modules/accounts/repositories/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppErrors(400, "e-mail already exists");
    }

    const passwordHash = await hash(password, 8);
    await this.userRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
