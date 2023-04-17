import { Express } from "express";
import { TestController } from "../controllers/test";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";
import { subscriptionRoutes } from "./subscription.routes";
import { subscriptionPlanRoutes } from "./subscription-plan.routes";
import { projectRoutes } from "./project.routes";
import { feedbackRoutes } from "./feedback.routes";
import { paymentRoutes } from "./payment.routes";

export const routesRoot = (app: Express) => {
  app.get("/", TestController.testFunc);
  authRoutes(app)
  userRoutes(app)
  subscriptionRoutes(app)
  subscriptionPlanRoutes(app)
  projectRoutes(app)
  feedbackRoutes(app)
  paymentRoutes(app)
};
