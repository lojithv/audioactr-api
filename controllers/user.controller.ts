import { Request, Response } from "express";
import User from "../schemas/user.schema";

export namespace UserController {

    export const getUsers = (req: Request, res: Response) => {
        User.find().populate("userRole").then((data)=>{
          console.log(data)
          res.send(data);
        })
      };
      export const addUser = (req: Request, res: Response) => {
        console.log("test")
        res.send("Express + TypeScript Server 123456");
      };
      export const updateUser = (req: Request, res: Response) => {
        console.log("test")
        res.send("Express + TypeScript Server 123456");
      };
      export const removeUser = (req: Request, res: Response) => {
        console.log("test")
        res.send("Express + TypeScript Server 123456");
      };
}
