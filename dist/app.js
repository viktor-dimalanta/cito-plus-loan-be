"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const loan_routes_1 = __importDefault(require("./routes/loan.routes")); // ✅ Correct import (default export)
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/loans", loan_routes_1.default);
// Default route
app.get("/", (req, res) => {
    res.send("Loan Application API is running...");
});
exports.default = app; // ✅ Ensure `app` is exported properly
