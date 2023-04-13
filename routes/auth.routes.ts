import { Express } from "express";
import { AuthController } from "../controllers/auth.controller";

export const authRoutes= (app: Express) => {
    app.post("/signup", AuthController.signup);
    app.post("/signin", AuthController.signin);
}