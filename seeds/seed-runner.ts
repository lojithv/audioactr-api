import dotenv from "dotenv";
import mongoose from "mongoose";
import { addUserRoles } from "./user-role.seed";
import { addAdmin } from "./admin.seed";

async function main() {
  console.log("seed runner");
  await mongoose.connect("mongodb://127.0.0.1:27017/audioactr");
}

async function runSeeds() {
  console.log("Run Seeds");
  //   addUserRoles()
  addAdmin();
}

main()
  .then(() => {
    console.log("Connected to MongoDb");
    runSeeds();
  })
  .catch((err) => console.log(err));
