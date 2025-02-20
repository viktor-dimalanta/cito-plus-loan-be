"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loan_service_1 = require("@services/loan.service");
describe('Loan Service', () => {
    let loanService;
    beforeAll(() => {
        loanService = new loan_service_1.LoanService();
    });
    it('should create a new loan application', async () => {
        const newLoan = await loanService.createLoan({
            applicantName: 'Alice',
            requestedAmount: 2000,
            status: 'PENDING',
        });
        expect(newLoan).toHaveProperty('id');
        expect(newLoan.applicantName).toBe('Alice');
        expect(newLoan.requestedAmount).toBe(2000);
    });
});
