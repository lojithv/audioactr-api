import { Express } from "express";
import { TestController } from "../controllers/test";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";
import { subscriptionRoutes } from "./subscription.routes";

export const routesRoot = (app: Express) => {
  app.get("/", TestController.testFunc);
  authRoutes(app)
  userRoutes(app)
  subscriptionRoutes(app)
};
