import { Express } from "express";
import { TestController } from "../controllers/test";

export const routesRoot = (app: Express) => {
  app.get("/test", TestController.testFunc);
};
