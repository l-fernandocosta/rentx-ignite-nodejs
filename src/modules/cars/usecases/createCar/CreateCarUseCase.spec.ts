import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppErrors } from "@shared/errors/AppErrors";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      brand: "Car Test",
      category_id: "category",
      daily_rate: 100,
      description: "Description test",
      fine_amount: 70,
      license_plate: "ABC-1234",
      name: "Car test",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car if license plate already exists", () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: "Car Test",
        category_id: "category",
        daily_rate: 100,
        description: "Description test",
        fine_amount: 70,
        license_plate: "ABC-1234",
        name: "Car test",
      });

      await createCarUseCase.execute({
        brand: "Car Test 2",
        category_id: "category",
        daily_rate: 100,
        description: "Description test",
        fine_amount: 70,
        license_plate: "ABC-1234",
        name: "Car test",
      });
    }).rejects.toBeInstanceOf(AppErrors);
  });

  it("should be able to create a car with  available status (true) by default", async () => {
    const car = await createCarUseCase.execute({
      brand: "Car Available test 2",
      category_id: "category",
      daily_rate: 100,
      description: "Description test",
      fine_amount: 70,
      license_plate: "ABCD-1444",
      name: "Car test",
    });

    expect(car.available).toBe(true);
  });
});
