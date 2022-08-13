import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const userAuthInfo = await authenticateUserUseCase.handle({
      email,
      password,
    });

    return response.status(201).json(userAuthInfo);
  }
}

export { AuthenticateUserController };
