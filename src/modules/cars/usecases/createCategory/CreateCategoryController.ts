import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    await this.createCategoryUseCase.execute({ description, name });

    return response.status(201).json({ msg: " Success !!" });
  }
}

export { CreateCategoryController };
