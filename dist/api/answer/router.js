"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AnswerRoute {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', (req, res) => {
            res.send("Answers returned..");
        });
    }
}
exports.AnswerRoute = AnswerRoute;
let answerRoute = new AnswerRoute();
answerRoute.init();
exports.default = answerRoute.router;
