"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loan_model_1 = require("../../src/models/loan.model");
describe('Loan Model', () => {
    it('should create a Loan instance', () => {
        const loan = new loan_model_1.Loan('John Doe', 1000, 'PENDING');
        expect(loan).toHaveProperty('id');
        expect(loan.applicantName).toBe('John Doe');
        expect(loan.requestedAmount).toBe(1000);
        expect(loan.status).toBe('PENDING');
    });
});
