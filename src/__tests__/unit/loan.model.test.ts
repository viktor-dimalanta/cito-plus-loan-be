import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Loan Model", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should create a Loan record", async () => {
    const loan = await prisma.loan.create({
      data: {
        applicantName: "John Doe",
        requestedAmount: 5000,
        status: "PENDING",
      },
    });

    expect(loan).toHaveProperty("id");
    expect(loan.applicantName).toBe("John Doe");
    expect(loan.requestedAmount).toBe(5000);
    expect(loan.status).toBe("PENDING");
  });

  it("should retrieve a Loan record", async () => {
    const loan = await prisma.loan.findFirst({
      where: { applicantName: "John Doe" },
    });

    expect(loan).not.toBeNull();
    expect(loan?.applicantName).toBe("John Doe");
  });

  it("should update a Loan record", async () => {
    const updatedLoan = await prisma.loan.updateMany({
      where: { applicantName: "John Doe" },
      data: { status: "APPROVED" },
    });

    expect(updatedLoan.count).toBeGreaterThan(0);

    const loan = await prisma.loan.findFirst({
      where: { applicantName: "John Doe" },
    });

    expect(loan?.status).toBe("APPROVED");
  });

  it("should delete a Loan record", async () => {
    const deletedLoan = await prisma.loan.deleteMany({
      where: { applicantName: "John Doe" },
    });

    expect(deletedLoan.count).toBeGreaterThan(0);
  });
});
