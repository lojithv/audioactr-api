import mongoose from "mongoose";
import UserRole from "./role.schema";
import User from "./user.schema";

export const registerSchemas = () => {
    mongoose.model('Role', UserRole.schema);
    mongoose.model('User', User.schema);
}