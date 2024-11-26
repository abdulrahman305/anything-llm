const request = require('supertest');
const app = require('../index'); // Assuming your Express app is exported from index.js

describe('GET /api/ping', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/ping');
    expect(res.statusCode).toEqual(200);
  });
});
