// @ts-ignore
import request from 'supertest';
import app from "../../app"; // Adjust based on the test file's location

describe('Loan API Endpoints', () => {
  it('should create a new loan application', async () => {
    const res = await request(app)
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
    const res = await request(app).get('/loans');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should retrieve a single loan by ID', async () => {
    const createRes = await request(app)
      .post('/loans')
      .send({
        applicantName: 'Test User',
        requestedAmount: 3000,
        status: 'PENDING'
      });

    const res = await request(app).get(`/loans/${createRes.body.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createRes.body.id);
  });

  it('should return 404 for non-existing loan ID', async () => {
    const res = await request(app).get('/loans/999');
    expect(res.statusCode).toBe(404);
  });
});
