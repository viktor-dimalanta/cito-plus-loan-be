"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanService = void 0;
const database_1 = __importDefault(require("../config/database"));
class LoanService {
    static async createLoan(data) {
        return await database_1.default.loan.create({
            data: {
                applicantName: data.applicantName,
                requestedAmount: data.requestedAmount,
                status: "PENDING",
            },
        });
    }
    static async getAllLoans() {
        return await database_1.default.loan.findMany();
    }
    static async getLoanById(id) {
        return await database_1.default.loan.findUnique({ where: { id } });
    }
    static async updateLoan(id, data) {
        return await database_1.default.loan.update({
            where: { id },
            data,
        });
    }
    static async deleteLoan(id) {
        return await database_1.default.loan.delete({ where: { id } });
    }
}
exports.LoanService = LoanService;
