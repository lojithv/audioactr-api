import { Request, Response } from "express";
import User from "../schemas/user.schema";

export namespace SubscriptionController {
  export const subscribeToPlan = (req: Request, res: Response) => {
    const { user, plan } = req.body;
    console.log(user);
    console.log(plan);
    User.findByIdAndUpdate(
      { _id: user._id },
      { paidUser: true },
      { new: true }
    ).then((doc) => {
      if (doc) {
        return res.send(doc);
      } else {
        return res.send("Something went wrong").status(500);
      }
    });
  };

  export const cancelSubscription = (req: Request, res: Response) => {
    console.log("test");
    res.send("Express + TypeScript Server 123456");
  };

  export const getSubscriptionStatusByUserId = (
    req: Request,
    res: Response
  ) => {
    console.log("test");
    res.send("Express + TypeScript Server 123456");
  };

  export const getSubscriptions = (req: Request, res: Response) => {
    console.log("test");
    res.send("Express + TypeScript Server 123456");
  };

  export const changeSubscriptionStatus = (req: Request, res: Response) => {
    console.log("test");
    res.send("Express + TypeScript Server 123456");
  };

  export const removeSubscription = (req: Request, res: Response) => {
    console.log("test");
    res.send("Express + TypeScript Server 123456");
  };
}
