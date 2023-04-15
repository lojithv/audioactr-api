import { Request, Response } from "express";

export namespace FeedbackController {
  export const addFeedback = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };

  export const getAllFeedbacks = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };
}