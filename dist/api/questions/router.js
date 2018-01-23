"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class QuestionsRoute {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', (req, res) => {
            res.json({ "name": "Add 10 and 20" });
        });
    }
}
exports.QuestionsRoute = QuestionsRoute;
let questionsRoute = new QuestionsRoute();
questionsRoute.init();
exports.default = questionsRoute.router;
