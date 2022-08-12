import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  execute(request: Request, response: Response) {
    const { file } = request;

    this.importCategoryUseCase.handle(file);
    return response.send();
  }
}

export { ImportCategoryController };
