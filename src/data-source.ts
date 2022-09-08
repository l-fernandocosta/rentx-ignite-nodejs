import "dotenv/config";
import "reflect-metadata";

import { User } from "./modules/accounts/infra/typeorm/entities/User";

import { Car } from "./modules/cars/infra/typeorm/entities/Car";
import { Category } from "./modules/cars/infra/typeorm/entities/Category";
import { Specification } from "./modules/cars/infra/typeorm/entities/Specification";

import { DataSource } from "typeorm";

const port = Number(process.env.DB_PORT);

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  synchronize: true,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Specification, Category, User, Car],
  subscribers: [],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});

export { AppDataSource };
