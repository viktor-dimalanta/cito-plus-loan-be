"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanController = void 0;
const loan_service_1 = require("../services/loan.service");
class LoanController {
    static async createLoan(req, res) {
        try {
            const loan = await loan_service_1.LoanService.createLoan(req.body);
            res.status(201).json(loan);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            }
            else {
                res.status(400).json({ message: 'An unknown error occurred' });
            }
        }
    }
    static async getAllLoans(req, res) {
        const loans = await loan_service_1.LoanService.getAllLoans();
        res.json(loans);
    }
    static async getLoanById(req, res) {
        try {
            const loan = await loan_service_1.LoanService.getLoanById(req.params.id);
            if (!loan)
                return res.status(404).json({ message: "Loan not found" });
            res.json(loan);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            }
            else {
                res.status(400).json({ message: 'An unknown error occurred' });
            }
        }
    }
    static async updateLoan(req, res) {
        try {
            const updatedLoan = await loan_service_1.LoanService.updateLoan(req.params.id, req.body);
            res.json(updatedLoan);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            }
            else {
                res.status(400).json({ message: 'An unknown error occurred' });
            }
        }
    }
    static async deleteLoan(req, res) {
        try {
            await loan_service_1.LoanService.deleteLoan(req.params.id);
            res.status(204).send();
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            }
            else {
                res.status(400).json({ message: 'An unknown error occurred' });
            }
        }
    }
}
exports.LoanController = LoanController;
