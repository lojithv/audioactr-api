import { Request, Response } from "express";

export namespace UserController {

    export const getUsers = (req: Request, res: Response) => {
        console.log("test")
        res.send("Express + TypeScript Server 123456");
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
