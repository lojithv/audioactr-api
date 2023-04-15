import { Request, Response } from "express";

export namespace AdminController {
  export const getUsers = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };
}
