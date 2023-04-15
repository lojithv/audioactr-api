import { Express } from "express";
import { SubscriptionController } from "../controllers/subscription.controller";

export const subscriptionRoutes= (app: Express) => {
    app.post("/add-subscription-plan", SubscriptionController.addSubscriptionPlan);
    app.get("/get-all-plans", SubscriptionController.getSubscriptionPlans);
    app.post("/subscribe-to-a-plan", SubscriptionController.subscribeToPlan);
    app.get("/get-subscription-status", SubscriptionController.getSubscriptionStatusByUserId);
}