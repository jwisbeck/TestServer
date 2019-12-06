const knex = require('knex');
const supertest = require('supertest');
const app = require('../../server');
const util = require('util');

const agent = supertest.agent(app.callback());


describe("Testing GET Badge", () => {
  test('GET /badges', async done =>{
    const res = await agent.get('/badges');
    expect(res.statusCode).toEqual(200);
    expect(res.body)
    done();
  })
});

describe("Testing POST badges", () => {
  test('POST /badges', async done =>{
    const res = await agent.post('/badges').send({
    name:"Test Badge",
    description:"added in the test",
    points:"100",
    image_filename:"none",
    url_image:"none",
    icon_filename:"none",
    url_icon:"none"
  });
  expect(res.statusCode).toEqual(200);
  done();
})
});
describe("Testing DELETE badges", () => {
  test('DELETE /badges', async done =>{
    knex('/badges').insert({id:100,
      name:"bad_ge",
      description:"should be removed",
      points:"100",
      image_filename:"none",
      url_image:"none",
      icon_filename:"none",
      url_icon:"none"
    });
    const res = await agent.delete('/badges/100');
    expect(res.statusCode).toEqual(200);
    done();
  })
});
describe("Testing PUT badges", () => {
  test('PUT /badges', async done =>{
    knex('/badges').insert({
      id:100,
      name:"bad_ge1",
      description:"should be changed",
      points:"100",
      image_filename:"none",
      url_image:"none",
      icon_filename:"none",
      url_icon:"none"
    });
    const res = await agent.put('/badges/100').send({
      name:"Welcome",
      description:"new badge for new users",
      points:"100",
      image_filename:"something",
      url_image:"something",
      icon_filename:"something",
      url_icon:"something"
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toContainKeys(['name','description','id']);
    done();
  })
});
