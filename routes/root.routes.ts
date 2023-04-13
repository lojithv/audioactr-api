import { Express } from "express";
import { TestController } from "../controllers/test";
import { authRoutes } from "./auth.routes";

export const routesRoot = (app: Express) => {
  app.get("/", TestController.testFunc);
  authRoutes(app)
};
