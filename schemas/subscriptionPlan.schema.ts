import mongoose from "mongoose";
const { Schema } = mongoose;

export enum PlanType {
  FREE = "FREE",
  PAID = "PAID",
}

export interface ISubscriptionPlan {
  planName: string;
  planDetails: string;
  price: number;
  planType: PlanType;
}

const subscriptionPlanSchema = new Schema({
  planName: String,
  planDetails: String,
  price: Number,
  planType: { type: PlanType, default: PlanType.PAID },
});

// compile our model
const SubscriptionPlan = mongoose.model<ISubscriptionPlan>(
  "SubscriptionPlan",
  subscriptionPlanSchema
);
export default SubscriptionPlan;
