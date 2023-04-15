import { Express } from "express";
import { SubscriptionController } from "../controllers/subscription.controller";

export const subscriptionRoutes= (app: Express) => {
    app.post("/subscribe-to-a-plan", SubscriptionController.subscribeToPlan);
    app.get("/get-subscription-status", SubscriptionController.getSubscriptionStatusByUserId);

    //admin
    app.get("/get-subscriptions", SubscriptionController.getSubscriptions);
}