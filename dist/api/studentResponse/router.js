"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
class StudentResponseRoute {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/:id', controller_1.StudentResponseController.getStudentResponse);
        this.router.post('/', controller_1.StudentResponseController.setStudentResponse);
    }
}
exports.StudentResponseRoute = StudentResponseRoute;
let studentResponseRoute = new StudentResponseRoute();
studentResponseRoute.init();
exports.default = studentResponseRoute.router;
