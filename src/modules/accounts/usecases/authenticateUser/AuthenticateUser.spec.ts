import { AppErrors } from "@shared/errors/AppErrors";
import { ICreateUserDTO } from "@modules/accounts/repositories/dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "@modules/accounts/usecases/createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "@modules/accounts/usecases/authenticateUser/AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able to auth a user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "1231231",
      email: "user.test.email@gmail.com",
      password: "1234123",
      name: "asdasdasdasdasdasdasd",
      id: "1231231231231",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.handle({
      email: user.email,
      password: user.password,
    });
    console.log(result);

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an nonexistent user", () => {
    expect(async () => {
      await authenticateUserUseCase.handle({
        email: "false@email.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppErrors);
  });

  it("should not be able to auth with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "9999",
        email: "user@user.com",
        name: "APP TEST ERROR",
        password: "1234",
      };

      await createUserUseCase.execute(user);
      await authenticateUserUseCase.handle({
        email: user.email,
        password: "1235190283",
      });
    }).rejects.toBeInstanceOf(AppErrors);
  });
});
