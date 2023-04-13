import express, { Express } from "express";
import dotenv from "dotenv";
import { routesRoot } from "./routes/root.routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { connectDB } from "./helpers/db-connect.helper";
import { registerSchemas } from "./schemas/register-schemas";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// enabling CORS for some specific origins only.
let corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

routesRoot(app);

connectDB()
  .then(() => {
    console.log("Connected to MongoDb");
    registerSchemas()
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
