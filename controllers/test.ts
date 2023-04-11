import { Request, Response } from "express";

export namespace TestController {
  export const testFunc = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };
}
