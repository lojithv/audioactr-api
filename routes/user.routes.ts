import { Express } from "express";
import { UserController } from "../controllers/user.controller";

export const userRoutes = (app: Express) => {
  //admin
  app.get("/get-users", UserController.getUsers);
  app.post("/add-user", UserController.getUsers);
  app.post("/update-user", UserController.getUsers);
  app.post("/remove-user", UserController.getUsers);
};
