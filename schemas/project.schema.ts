import mongoose, { Mixed, Types } from "mongoose";
const { Schema } = mongoose;

export interface IProject {
  title: string;
  userId: Types.ObjectId;
  state: Mixed;
}

const projectSchema = new Schema({
  title: String,
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  state: { type: Schema.Types.Mixed, required: true },
});

// compile our model
const Project = mongoose.model<IProject>("Project", projectSchema);
export default Project;
