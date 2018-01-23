"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class QuestionRoute {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', (req, res) => {
            res.send("Question returned..");
        });
    }
}
exports.QuestionRoute = QuestionRoute;
let questionRoute = new QuestionRoute();
questionRoute.init();
exports.default = questionRoute.router;
