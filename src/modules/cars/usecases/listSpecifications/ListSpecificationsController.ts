import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class ListSpecificationController {
  async execute(request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );
    const allSpecifications = await listSpecificationsUseCase.handle();

    return response.status(200).json(allSpecifications);
  }
}

export { ListSpecificationController };
