import { LoanController } from '../../controllers/loan.controller';
// import { Loan } from '../../src/models/loan.model';
import { expect, it, describe } from '@jest/globals'

describe('Loan Model', () => {
//   it('should create a Loan instance', () => {
//     const loan = new Loan('John Doe', 1000, 'PENDING');
//     expect(loan).toHaveProperty('id');
//     expect(loan.applicantName).toBe('John Doe');
//     expect(loan.requestedAmount).toBe(1000);
//     expect(loan.status).toBe('
//   });
  it('it should be able to gell all loans', async () => {
    const response = await LoanController.getAllLoans("", "")
    expect(response).toBeTruthy()
    expect
  })

});


