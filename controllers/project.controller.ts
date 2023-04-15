import { Request, Response } from "express";

export namespace ProjectController {
    export const createproject = (req: Request, res: Response) => {
        console.log("test")
        res.send("Express + TypeScript Server 123456");
      };
    
      export const getProjectsByUserId = (req: Request, res: Response) => {
        console.log("test")
        res.send("Express + TypeScript Server 123456");
      };
    
      export const saveProject = (req: Request, res: Response) => {
        console.log("test")
        res.send("Express + TypeScript Server 123456");
      };
}
