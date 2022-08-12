import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "./modules/cars/entities/Category";
import { Specification } from "./modules/cars/entities/Specification";
const port = Number(process.env.DB_PORT);

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Specification, Category],
  subscribers: [],
  migrations: ["./src/database/migrations/*.ts"],
});

export { AppDataSource };
