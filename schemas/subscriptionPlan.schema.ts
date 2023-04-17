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
  expirationPeriod: number;
  planType: string;
}

const subscriptionPlanSchema = new Schema({
  planName: String,
  planDetails: String,
  price: Number,
  expirationPeriod: Number,
  planType: { type: String, default: PlanType.PAID },
});

// compile our model
const SubscriptionPlan = mongoose.model<ISubscriptionPlan>(
  "SubscriptionPlan",
  subscriptionPlanSchema
);
export default SubscriptionPlan;
