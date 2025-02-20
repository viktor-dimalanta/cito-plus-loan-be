import { LoanService } from "@services/loan.service";

describe('Loan Service', () => {
  let loanService: LoanService;

  beforeAll(() => {
    loanService = new LoanService();
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
