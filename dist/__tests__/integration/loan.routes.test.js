"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app")); // Adjust based on the test file's location
describe('Loan API Endpoints', () => {
    it('should create a new loan application', async () => {
        const res = await (0, supertest_1.default)(app_1.default)
            .post('/loans')
            .send({
            applicantName: 'Jane Doe',
            requestedAmount: 5000,
            status: 'PENDING'
        });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.applicantName).toBe('Jane Doe');
    });
    it('should retrieve all loan applications', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/loans');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
    it('should retrieve a single loan by ID', async () => {
        const createRes = await (0, supertest_1.default)(app_1.default)
            .post('/loans')
            .send({
            applicantName: 'Test User',
            requestedAmount: 3000,
            status: 'PENDING'
        });
        const res = await (0, supertest_1.default)(app_1.default).get(`/loans/${createRes.body.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(createRes.body.id);
    });
    it('should return 404 for non-existing loan ID', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/loans/999');
        expect(res.statusCode).toBe(404);
    });
});
