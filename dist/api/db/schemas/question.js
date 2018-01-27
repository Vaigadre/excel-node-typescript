"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.questionSchema = new mongoose_1.Schema({
    name: String,
    state: Object,
    gradedCells: Object
});
