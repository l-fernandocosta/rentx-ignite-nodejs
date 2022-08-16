import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import "reflect-metadata";
import "./shared/container/index";
import { router } from "./routes";
import { AppDataSource } from "./data-source";
import { AppErrors } from "./errors/AppErrors";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    app.use(express.json());
    app.use(router);
    app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (err instanceof AppErrors) {
          return response.status(err.statusCode).json({
            message: err.message,
          });
        }
        return response.status(500).json({
          status: "error",
          message: `Internal server error - ${err.message}`,
        });
      }
    );
    app.listen(process.env.PORT, () => {
      console.log("Server is running 🔥");
    });
  })
  .catch((err) => {
    console.log(err);
  });
