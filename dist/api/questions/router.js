"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
class QuestionsRoute {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', controller_1.QuestionsController.getQuestions);
    }
}
exports.QuestionsRoute = QuestionsRoute;
let questionsRoute = new QuestionsRoute();
questionsRoute.init();
exports.default = questionsRoute.router;
