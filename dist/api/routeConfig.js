"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/question', (req, res) => {
    res.json({ 'question': "test Question" });
});
exports.default = router;
