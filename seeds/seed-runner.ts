import dotenv from "dotenv";
import { addUserRoles } from "./user-role.seed";
import { addAdmin } from "./admin.seed";
import { connectDB } from "../helpers/db-connect.helper";

async function runSeeds() {
  console.log("Run Seeds");
    // addUserRoles()
  addAdmin();
}

connectDB()
  .then(() => {
    console.log("Connected to MongoDb");
    runSeeds();
  })
  .catch((err) => console.log(err));
