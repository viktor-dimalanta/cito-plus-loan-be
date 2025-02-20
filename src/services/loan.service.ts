import { Loan } from "@prisma/client";
import prisma from "../config/database";

export class LoanService {
  static async createLoan(data: { applicantName: string; requestedAmount: number }): Promise<Loan> {
    return await prisma.loan.create({
      data: {
        applicantName: data.applicantName,
        requestedAmount: data.requestedAmount,
        status: "PENDING",
      },
    });
  }

  static async getAllLoans(): Promise<Loan[]> {
    return await prisma.loan.findMany();
  }

  static async getLoanById(id: string): Promise<Loan | null> {
    return await prisma.loan.findUnique({ where: { id } });
  }

  static async updateLoan(id: string, data: Partial<Loan>): Promise<Loan | null> {
    return await prisma.loan.update({
      where: { id },
      data,
    });
  }

  static async deleteLoan(id: string): Promise<Loan | null> {
    return await prisma.loan.delete({ where: { id } });
  }
}
