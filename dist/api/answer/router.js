"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
class AnswerRoute {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/:id', controller_1.AnswerController.getAnswer);
        this.router.post('/', controller_1.AnswerController.setAnswer);
    }
}
exports.AnswerRoute = AnswerRoute;
let answerRoute = new AnswerRoute();
answerRoute.init();
exports.default = answerRoute.router;
