import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Database Connection", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should successfully connect to the database", async () => {
    await expect(prisma.$connect()).resolves.not.toThrow();
  });

  it("should insert and retrieve a Loan record", async () => {
    const loan = await prisma.loan.create({
      data: {
        applicantName: "John Doe",
        requestedAmount: 5000,
        status: "PENDING",
      },
    });

    const foundLoan = await prisma.loan.findUnique({
      where: { id: loan.id },
    });

    expect(foundLoan).not.toBeNull();
    expect(foundLoan?.applicantName).toBe("John Doe");
    expect(foundLoan?.requestedAmount).toBe(5000);
  });
});
