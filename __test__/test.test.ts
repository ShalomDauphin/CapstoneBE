const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('Test create', () => {
  it('Should return 401 if post has no authentication ', async () => {
    const post = {
      name: 'new',
      email: 'shalom@gmail.com',
      text: 'new text',
    };
    const res = await request(app).post('/api/v1/posts/').send(post);
    expect(res.status).toEqual(401);
  });

  it('Should return 401 if profile has no authentication ', async () => {
    const profile = {
      website: 'shalom.com',
      location: 'Kigali',
      skills: ' nodejs, react, ',
      bio: 'Experienced software Engineer',
      githubusername: 'ShalomDauphin',
    };
    const res = await request(app).post('/api/v1/profiles/').send(profile);
    expect(res.status).toEqual(401);
  });
});

describe('Register User', () => {
  jest.setTimeout(300000);
  it('Should return 500 if user  has been failed to be registerd ', async () => {
    const user = {
      name: 'Dauphin',
      email: 'kwizera@gmail.com',
      password: '123456',
    };
    const res = await request(app).post('/api/v1/auth/register').send(user);
    expect(res.status).toEqual(500);
  });
});

describe('Register User', () => {
  jest.setTimeout(300000);
  it('Should return 500 if user  has been failed to be registerd ', async () => {
    const user = {
      name: 'Dauphin',
      email: 'kwizera@gmail.com',
      password: '123456',
    };
    const res = await request(app).post('/api/v1/auth/register').send(user);
    expect(res.status).toEqual(500);
  });
});

describe('get Posts', () => {
  jest.setTimeout(300000);
  it('Should return posts ', async () => {
    const user = {
      name: 'Dauphin',
      email: 'kwizera@gmail.com',
      password: '123456',
    };
    const res = await request(app).post('/api/v1/auth/register').send(user);
    expect(res.status).toEqual(500);
  });
});
