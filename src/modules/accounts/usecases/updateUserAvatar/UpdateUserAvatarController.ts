import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase";

class UpdateUsertAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const avatarFile = null;
    const userUpdateAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await userUpdateAvatarUseCase.execute({
      avatarFile: avatarFile,
      user_id: id,
    });

    return response.status(204).send();
  }
}

export { UpdateUsertAvatarController };
