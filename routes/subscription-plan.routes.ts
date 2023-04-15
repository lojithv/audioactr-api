import { Express } from "express";
import { SubscriptionPlanController } from "../controllers/subscriptionPlan.controller";

export const subscriptionPlanRoutes = (app: Express) => {
    app.post("/add-subscription-plan", SubscriptionPlanController.addSubscriptionPlan);
    app.get("/get-all-plans", SubscriptionPlanController.getSubscriptionPlans);
};