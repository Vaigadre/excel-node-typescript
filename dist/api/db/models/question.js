"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const question_1 = require("../schemas/question");
exports.Question = mongoose_1.model("Question", question_1.questionSchema);
