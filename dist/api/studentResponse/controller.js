"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentResponse_1 = require("../db/models/studentResponse");
class StudentResponseController {
    static getStudentResponse(req, res) {
        studentResponse_1.StudentResponse.find({ questionId: req.params.id }).then((stuAns) => {
            res.json(stuAns);
        });
    }
    static setStudentResponse(req, res) {
        studentResponse_1.StudentResponse.findOneAndUpdate({ questionId: req.body.questionId }, req.body, { upsert: true }).then((stuAns) => {
            res.status(201);
            console.log("Student response added/modified");
        });
    }
}
exports.StudentResponseController = StudentResponseController;
