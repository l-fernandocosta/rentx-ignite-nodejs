import express from "express";
import { router } from "./routes";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(router);

    app.listen(process.env.PORT, () => {
      console.log("Server is running 🔥");
    });
  })
  .catch((err) => {
    console.log(err);
  });
