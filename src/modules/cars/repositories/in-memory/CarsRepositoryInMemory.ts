import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const carLicensePlateAlreadyExists = await this.cars.find(
      (car) => car.license_plate === license_plate
    );

    return carLicensePlateAlreadyExists;
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    this.cars.push(car);

    return car;
  }
}

export { CarsRepositoryInMemory };
