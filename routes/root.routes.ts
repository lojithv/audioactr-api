import { Express } from "express";
import { TestController } from "../controllers/test";
import { authRoutes } from "./auth.routes";
import { adminRoutes } from "./admin.routes";
import { clientRoutes } from "./client.routes";
import { subscriptionRoutes } from "./subscription.routes";

export const routesRoot = (app: Express) => {
  app.get("/", TestController.testFunc);
  authRoutes(app)
  adminRoutes(app)
  clientRoutes(app)
  subscriptionRoutes(app)
};
