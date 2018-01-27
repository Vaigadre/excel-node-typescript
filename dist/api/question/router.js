"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
class QuestionRoute {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', controller_1.default.getQuestion);
        this.router.post('/', controller_1.default.setQuestion);
    }
}
exports.QuestionRoute = QuestionRoute;
let questionRoute = new QuestionRoute();
questionRoute.init();
exports.default = questionRoute.router;
