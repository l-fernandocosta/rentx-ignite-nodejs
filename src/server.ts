import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import "reflect-metadata";
import "./shared/container/index";
import { router } from "./routes";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    app.use(express.json());
    app.use(router);

    app.listen(process.env.PORT, () => {
      console.log("Server is running 🔥");
    });
  })
  .catch((err) => {
    console.log(err);
  });
