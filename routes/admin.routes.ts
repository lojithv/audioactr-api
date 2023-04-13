import { Express } from "express";
import { AdminController } from "../controllers/admin.controller";

export const routesRoot = (app: Express) => {
  app.get("/get-users", AdminController.getUsers);
};