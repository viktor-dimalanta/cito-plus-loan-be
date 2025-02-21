"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loan_controller_1 = require("../../controllers/loan.controller");
// import { Loan } from '../../src/models/loan.model';
const globals_1 = require("@jest/globals");
(0, globals_1.describe)('Loan Model', () => {
    //   it('should create a Loan instance', () => {
    //     const loan = new Loan('John Doe', 1000, 'PENDING');
    //     expect(loan).toHaveProperty('id');
    //     expect(loan.applicantName).toBe('John Doe');
    //     expect(loan.requestedAmount).toBe(1000);
    //     expect(loan.status).toBe('
    //   });
    (0, globals_1.it)('it should be able to gell all loans', async () => {
        const response = await loan_controller_1.LoanController.getAllLoans("", "");
        (0, globals_1.expect)(response).toBeTruthy();
        globals_1.expect;
    });
});
