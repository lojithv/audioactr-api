import { Express } from "express";
import { ProjectController } from "../controllers/project.controller";

export const projectRoutes = (app: Express) => {
  //user
  app.post("/create-project", ProjectController.createproject);
  app.post("/delete-project", ProjectController.deleteproject);
  app.post("/get-all-projects", ProjectController.getProjectsByUserId);
  app.post("/save-project", ProjectController.saveProject);
};
