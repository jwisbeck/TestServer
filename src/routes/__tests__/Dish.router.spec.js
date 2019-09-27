const knex = require('knex');
const supertest = require('supertest');
const app = require('../../server');
const util = require('util');

const agent = supertest.agent(app.callback());


describe("Testing GET dishes", () => {
  test('GET /dishes', async done =>{
    const res = await agent.get('/dishes');
    expect(res.statusCode).toEqual(200);
    expect(res.body)
    done();
  })
});

describe("Testing POST dishes", () => {
  test('POST /dishes', async done =>{
    const res = await agent.post('/dishes').send({dish_name:"Test Dish", description:"added in the test"});
    expect(res.statusCode).toEqual(200);
    done();
  })
});
describe("Testing DELETE dishes", () => {
  test('DELETE /dishes', async done =>{
    knex('/dishes').insert({id:100,dish_name:"toilet",description:"should be removed"});
    const res = await agent.delete('/dishes/100');
    expect(res.statusCode).toEqual(200);
    done();
  })
});
describe("Testing PUT dishes", () => {
  test('PUT /dishes', async done =>{
    knex('/dishes').insert({id:100,dish_name:"toilet",description:"should be removed"});
    const res = await agent.put('/dishes/100').send({dish_name:"Updated Dish", description:"updated to new dish"});
    expect(res.statusCode).toEqual(200);
    expect(res.body).toContainKeys(['dish_name','description','id']);
    done();
  })
});
