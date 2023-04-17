import { Request, Response } from "express";

export namespace SubscriptionPlanController {
  export const addSubscriptionPlan = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
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