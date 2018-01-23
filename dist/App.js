"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
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
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
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
