import mongoose from "mongoose";
const { Schema } = mongoose;

export interface IUserRole{
  role:string;
}

const userRoleSchema = new Schema({
  role: String,
});

// compile our model
const UserRole = mongoose.model<IUserRole>("UserRole", userRoleSchema);
export default UserRole;
