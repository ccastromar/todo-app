"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TodoSchema = new mongoose.Schema({
    title: String,
    category: { type: String, default: 'default' },
    completed: { type: Boolean, default: false }
}, { timestamps: true });
//# sourceMappingURL=todo.schema.js.map