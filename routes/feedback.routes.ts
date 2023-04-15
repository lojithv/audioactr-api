import { Express } from "express";
import { FeedbackController } from "../controllers/feedback.controller";

export const feedbackRoutes = (app: Express) => {
  //user
  app.get("/add-feedback", FeedbackController.addFeedback);

  //admin
  app.get("/get-all-feedbacks", FeedbackController.getAllFeedbacks);
};