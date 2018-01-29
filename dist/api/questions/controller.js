"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_1 = require("../db/models/question");
class QuestionsController {
    static getQuestions(req, res) {
        question_1.Question.find({}).then((ques) => {
            res.json(ques);
        });
    }
}
exports.QuestionsController = QuestionsController;
