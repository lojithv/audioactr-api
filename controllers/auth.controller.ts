import { Request, Response } from "express";
import { UserModel } from "../models/user.model";

export namespace AuthController {
  export const signup = (req: Request, res: Response) => {
    console.log(req.body)
    const userData: UserModel = req.body?.userData; 
    console.log("UserData", userData)
    res.send({userData});
  };

  export const signin = (req: Request, res: Response) => {
    console.log("test")
    res.send("Express + TypeScript Server 123456");
  };
}
