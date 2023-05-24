import express from "express";
import StartRoute from "./router/start.routes";
import UserRoute from "./router/user.routes";

require('dotenv').config({path: '.env'});

const api = express();

api.use(express.json());

api.use(StartRoute);
api.use(UserRoute);

api.listen(process.env.SERVER_PORT);