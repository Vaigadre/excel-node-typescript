"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentResponse_1 = require("../schemas/studentResponse");
exports.StudentResponse = mongoose_1.model('StudentResponse', studentResponse_1.studentResponseSchema);
