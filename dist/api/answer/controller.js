"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const answer_1 = require("../db/models/answer");
class AnswerController {
    static getAnswer(req, res) {
        answer_1.Answer.find({ questionId: req.params.id }, { '__v': 0 }).then((ans) => {
            res.json(ans);
        });
    }
    static setAnswer(req, res) {
        answer_1.Answer.create(req.body).then((ans) => {
            res.status(201);
            console.log("Answer is added");
        });
    }
}
exports.AnswerController = AnswerController;
