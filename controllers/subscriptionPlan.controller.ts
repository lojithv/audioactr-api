import { Request, Response } from "express";
import SubscriptionPlan from "../schemas/subscriptionPlan.schema";

export namespace SubscriptionPlanController {
  export const addSubscriptionPlan = (req: Request, res: Response) => {
    const data = req.body
    const subscriptionPlan = new SubscriptionPlan(data)
  };

  export const editSubscriptionPlan = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };

  export const removeSubscriptionPlan = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };

  export const getSubscriptionPlans = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };
}