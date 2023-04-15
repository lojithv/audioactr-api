import { Express } from "express";
import { ClientController } from "../controllers/client.controller";

export const clientRoutes= (app: Express) => {
    app.post("/create-project", ClientController.createproject);
    app.get("/get-all-projects", ClientController.getProjectsByUserId);
    app.post("/save-project", ClientController.saveProject);
}