"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class StudentResponseRoute {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', (req, res) => {
            res.send("Student Response returned..");
        });
    }
}
exports.StudentResponseRoute = StudentResponseRoute;
let studentResponseRoute = new StudentResponseRoute();
studentResponseRoute.init();
exports.default = studentResponseRoute.router;
