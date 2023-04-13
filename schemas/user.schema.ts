import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

export interface IUser extends mongoose.Document {
 firstname:string;
 lastname:string;
 email:string;
 password:string;
 userRole:Types.ObjectId
}

const userSchema = new Schema({
  firstname: String, // String is shorthand for {type: String}
  lastname: String,
  email: String,
  password: String,
  userRole: { type: Schema.Types.ObjectId, ref: "UserRole" },
  createdDate: { type: Date, default: Date.now },
});

// compile our model
const User = mongoose.model<IUser>("User", userSchema);
export default User;
