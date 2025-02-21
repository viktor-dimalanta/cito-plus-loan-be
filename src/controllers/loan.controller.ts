// @ts-ignore
import { Request, Response } from "express";
import { LoanService } from "../services/loan.service";

export class LoanController {
  static async createLoan(req: Request, res: Response) {
    try {
      const loan = await LoanService.createLoan(req.body);
      res.status(201).json(loan);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unknown error occurred' });
      }
    }
  }  

  static async getAllLoans(req: any, res: Response) {
    const loans = await LoanService.getAllLoans();
    res.json(loans);
  }

  static async getLoanById(req: Request, res: Response) {
    try {
      const loan = await LoanService.getLoanById(req.params.id);
      if (!loan) return res.status(404).json({ message: "Loan not found" });
      res.json(loan);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unknown error occurred' });
      }
    }
  }
  
  static async updateLoan(req: Request, res: Response) {
    try {
      const updatedLoan = await LoanService.updateLoan(req.params.id, req.body);
      res.json(updatedLoan);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unknown error occurred' });
      }
    }
  }  

  static async deleteLoan(req: Request, res: Response) {
  try {
    await LoanService.deleteLoan(req.params.id);
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
}

}