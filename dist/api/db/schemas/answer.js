"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.answerSchema = new mongoose_1.Schema({
    questionId: String,
    gradedCells: []
});
