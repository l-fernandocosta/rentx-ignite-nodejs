/* import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { Request, Response } from "express";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationsUseCase) {}

  execute(request: Request, response: Response): Response {
    const allSpecifications = this.listSpecificationUseCase.handle();

    return response.status(200).json(allSpecifications);
  }
}

export { ListSpecificationController };
 */
