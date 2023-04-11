import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { routesRoot } from './routes/root';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// enabling CORS for some specific origins only.
let corsOptions = {
    origin : ['http://localhost:3000'],
 }
   
 app.use(cors(corsOptions))

routesRoot(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});