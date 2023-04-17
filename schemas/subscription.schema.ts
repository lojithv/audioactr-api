import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

export interface ISubscription {
  userId: Types.ObjectId;
  planId: Types.ObjectId;
  expirationDate: Date;
}

const subscriptionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  planId: {
    type: Schema.Types.ObjectId,
    ref: "SubscriptionPlan",
    required: true,
  },
  expirationDate: { type: Date },
  createdDate: { type: Date, default: Date.now },
});

// compile our model
const Subscription = mongoose.model<ISubscription>(
  "Subscription",
  subscriptionSchema
);
export default Subscription;
