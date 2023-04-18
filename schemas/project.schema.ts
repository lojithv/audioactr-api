import mongoose, { Mixed, Types } from "mongoose";
const { Schema } = mongoose;

export interface IProject {
  userId: Types.ObjectId;
  projectId:string;
  state: Mixed;
}

const projectSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  projectId:String,
  state: { type: Schema.Types.Mixed, required: true },
});

// compile our model
const Project = mongoose.model<IProject>("Project", projectSchema);
export default Project;
