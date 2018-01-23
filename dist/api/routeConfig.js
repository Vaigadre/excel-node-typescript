"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router_1 = require("./questions/router");
const router_2 = require("./question/router");
const router_3 = require("./answer/router");
const router_4 = require("./studentResponse/router");
class RouteConfig {
    //Initialize routeConfig\
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.use('/questions', router_1.default);
        this.router.use('/question', router_2.default);
        this.router.use('/answer', router_3.default);
        this.router.use('/student-response', router_4.default);
    }
}
exports.RouteConfig = RouteConfig;
let routeConfig = new RouteConfig();
routeConfig.init();
exports.default = routeConfig.router;
