import { Request, Response } from "express";

export namespace SubscriptionController {
  export const addSubscriptionPlan = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };

  export const getSubscriptionPlans = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };

  export const subscribeToPlan = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };

  export const getSubscriptionStatusByUserId = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };
}