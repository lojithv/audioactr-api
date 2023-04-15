import { Types } from "mongoose";

export interface UserModel{
    firstname:String;
    lastname:String;
    email:String;
    password:String;
    userRole:Types.ObjectId;
}