import mongoose from "mongoose";
const { Schema } = mongoose;

export interface IRole{
  role:string;
}

const userRoleSchema = new Schema({
  role: String,
});

// compile our model
const UserRole = mongoose.model<IRole>("Role", userRoleSchema);
export default UserRole;
