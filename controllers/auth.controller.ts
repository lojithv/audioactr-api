import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { LoginData } from "../models/login-data.model";
import User from "../schemas/user.schema";

export namespace AuthController {
  export const signup = (req: Request, res: Response) => {
    console.log(req.body);
    const userData: UserModel = req.body?.userData;
    console.log("UserData", userData);
    res.send({ userData });
  };

  export const signin = (req: Request, res: Response) => {
    console.log("test");
    const authData: LoginData = req.body;
    User.findOne({ email: authData.email }, {}, { populate: ["userRole"] })
      .then((user) => {
        console.log("User", user);
        if (user) {
          if (user.password !== authData.password) {
            res.send("invalid Email or Password");
          } else {
            res.send(user);
          }
        } else {
          res.send("User not found!");
        }
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  };
}


