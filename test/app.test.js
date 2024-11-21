const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3001);
  });

  afterAll(done => {
    if (server) {
      server.close(done);
    } else {
      done();
    }
  });

  test('GET / should return message containing "hello"', async () => {
    const response = await request(server)
      .get('/')
      .expect(200);
    
    expect(response.text.toLowerCase()).toContain('hello');
  });
});
