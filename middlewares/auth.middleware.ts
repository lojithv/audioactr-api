import { Request, Response } from "express";

export namespace AuthMiddleware {
  export const authenticateToken = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };
}