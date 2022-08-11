import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  execute(request: Request, response: Response): Response {
    const { name, description } = request.body;
    this.createSpecificationUseCase.handle({
      name,
      description,
    });

    return response.status(201).json({ msg: "Sucess" });
  }
}

export { CreateSpecificationController };
