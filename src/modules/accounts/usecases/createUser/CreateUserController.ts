import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "../../../cars/usecases/createCategory/CreateCategoryUseCase";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, password, email, driver_license } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      username,
      password,
      email,
      driver_license,
    });

    return response.status(201).json({ msg: "Success" });
  }
}

export { CreateUserController };
