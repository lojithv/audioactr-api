import { Express } from "express";
import { UserController } from "../controllers/user.controller";

export const userRoutes = (app: Express) => {
  //admin
  app.get("/get-users", UserController.getUsers);
};
