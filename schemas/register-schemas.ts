import mongoose from "mongoose";
import UserRole from "./role.schema";
import User from "./user.schema";
import Project from "./project.schema";
import Feedback from "./feedback.schema";
import SubscriptionPlan from "./subscriptionPlan.schema";
import Subscription from "./subscription.schema";

export const registerSchemas = () => {
  mongoose.model("Role", UserRole.schema);
  mongoose.model("User", User.schema);
  mongoose.model("Project", Project.schema);
  mongoose.model("Feedback", Feedback.schema);
  mongoose.model("SubscriptionPlan", SubscriptionPlan.schema);
  mongoose.model("Subscription", Subscription.schema);
};
