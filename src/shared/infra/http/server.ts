import "express-async-errors";
import "reflect-metadata";
import "@shared/container";

import swaggerFile from "../../../swagger.json";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import { AppErrors } from "@shared/errors/AppErrors";
import { AppDataSource } from "data-source";
import express, { NextFunction, Request, Response } from "express";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    app.use(express.json());

    app.use(router);
    app.use(
      (
        error: AppErrors,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (error instanceof AppErrors) {
          return response.status(error.statusCode).json({
            message: error.errorMessage,
          });
        }
        return response.status(500).json({
          status: "error",
          message: `Internal server error - ${error}`,
        });
      }
    );
    app.listen(process.env.PORT, () => {
      console.log("Server is running 🔥");
    });
  })
  .catch((error) => {
    console.log(error);
  });
