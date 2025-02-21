// @ts-ignore
import { Router } from "express";
import {LoanController} from "../controllers/loan.controller"; // ✅ Ensure correct import

const router = Router();

// Define routes
router.post("/", LoanController.createLoan);
router.get("/", LoanController.getAllLoans);
router.get("/:id", LoanController.getLoanById);
router.put("/:id", LoanController.updateLoan);
router.delete("/:id", LoanController.deleteLoan);

export default router; // ✅ Default export for correct import in app.ts
