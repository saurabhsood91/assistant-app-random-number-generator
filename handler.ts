import express from "express";
import * as bodyParser from "body-parser";

import app from "./src/app";

const serverless = require("serverless-http");

export const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.post("/fullfillment", app);

module.exports.fullfillment = serverless(expressApp);
