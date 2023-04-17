import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

export interface IFeedback {
  userId: Types.ObjectId;
  feedback: string;
}

const feedbackSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  feedback: String,
  createdDate: { type: Date, default: Date.now },
});

// compile our model
const Feedback = mongoose.model<IFeedback>("Feedback", feedbackSchema);
export default Feedback;
