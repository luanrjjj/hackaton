require("dotenv").config();
import * as express from "express";
const config = require("config");
import routes from './routes';
import "./database";

import PostgresDataSource from "./app-data-source"


const app = express();
app.use(express.json());

PostgresDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.listen("3000", () => {
  console.log(`Server started on port: 3000`);
});
