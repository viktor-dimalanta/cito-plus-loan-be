"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../src/database");
describe('Database Connection', () => {
    it('should connect to the database successfully', async () => {
        const client = await database_1.pool.connect();
        expect(client).toBeDefined();
        client.release();
    });
});
