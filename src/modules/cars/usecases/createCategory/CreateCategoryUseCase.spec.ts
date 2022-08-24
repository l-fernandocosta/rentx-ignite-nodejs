import { AppErrors } from "../../../../errors/AppErrors";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("CreateCategoryUseCase", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should create a category", async () => {
    const category = {
      name: "TEST CATEGORY",
      description: "TEST DESCRIPTION",
    };
    await createCategoryUseCase.execute(category);
    const createdCategory = await categoriesRepositoryInMemory.findByName(
      category.name
    );
    //if category was created, so, should have  id property.
    expect(createdCategory).toHaveProperty("id");
  });

  it("should not be able to create a category that have equals names", async () => {
    expect(async () => {
      const category = {
        name: "TEST CATEGORY",
        description: "TEST DESCRIPTION",
      };
      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppErrors);
  });
});
