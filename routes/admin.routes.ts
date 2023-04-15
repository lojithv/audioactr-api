import { Express } from "express";
import { AdminController } from "../controllers/admin.controller";

export const adminRoutes = (app: Express) => {
  app.get("/get-users", AdminController.getUsers);
  app.get("/get-subscriptions", AdminController.getSubscriptions);
};