"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const answer_1 = require("../schemas/answer");
exports.Answer = mongoose_1.model("Answer", answer_1.answerSchema);
