"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routeConfig = require("./api/routeConfig");
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
        let router = express.Router();
        //default route
        router.get('/', (req, res, next) => {
            res.json({ message: "Hello World!!" });
        });
        this.app.use('/excel', routeConfig);
    }
}
exports.default = new App().app;
