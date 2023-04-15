import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { LoginData } from "../models/login-data.model";
import User from "../schemas/user.schema";
import UserRole from "../schemas/role.schema";

export namespace AuthController {
  export const signup = (req: Request, res: Response) => {
    console.log(req.body);

    UserRole.findOne({ role: "USER" })
      .then((r) => {
        if (r) {
          const userData: UserModel = {
            ...req.body,
            userRole: r?._id,
          };

          console.log("UserData", userData);

          const user = new User(userData);
          user
            .save()
            .then((doc) => {
              console.log(doc);
              res.send(doc).status(200)
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.send("Cannot create user").status(400)
        }
      })
      .catch((err) => {
        console.log("Cannot find admin role id");
        res.send("Cannot create user").status(400)
      });
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
