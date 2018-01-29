"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.studentResponseSchema = new mongoose_1.Schema({
    questionId: String,
    answer: []
});
