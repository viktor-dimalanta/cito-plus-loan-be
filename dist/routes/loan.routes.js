"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loan_controller_1 = require("../controllers/loan.controller"); // ✅ Ensure correct import
const router = (0, express_1.Router)();
// Define routes
router.post("/", loan_controller_1.LoanController.createLoan);
router.get("/", loan_controller_1.LoanController.getAllLoans);
router.get("/:id", loan_controller_1.LoanController.getLoanById);
router.put("/:id", loan_controller_1.LoanController.updateLoan);
router.delete("/:id", loan_controller_1.LoanController.deleteLoan);
exports.default = router; // ✅ Default export for correct import in app.ts
