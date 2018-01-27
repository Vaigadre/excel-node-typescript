"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routeConfig_1 = require("./api/routeConfig");
//Creates and configures Express app
class App {
    //Runs configration on express instance
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }
    //configure express middleware
    middleware() {
        const MONGODB_CONNECTION = "mongodb://localhost:27017/test";
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        mongoose.Promise = global.Promise;
        mongoose.connect(MONGODB_CONNECTION);
        let dbConnection = mongoose.createConnection(MONGODB_CONNECTION);
        dbConnection.on('open', () => {
            console.log("The DB is connected successfully.");
        });
        dbConnection.on('error', (err) => {
            console.log("The DB connection failed with error: " + err);
        });
    }
    //configure API endpoints
    routes() {
        //let router = express.Router();
        //default route
        this.app.get('/', (req, res, next) => {
            res.json({ message: "The valid endpoints are /excel/apiName ex: question" });
        });
        this.app.use('/excel', routeConfig_1.default);
    }
}
exports.default = new App().app;
