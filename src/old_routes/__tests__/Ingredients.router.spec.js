const knex = require('knex');
const supertest = require('supertest');
const app = require('../../server');

const agent = supertest.agent(app.callback());

describe("Testing GET ingredients", () => {
  test('GET /ingredients', async done =>{
    const res = await agent.get('/ingredients');
    expect(res.statusCode).toEqual(200);
    done();
  })
});
describe("Testing POST ingredients", () => {
  test('POST /ingredients', async done =>{
    const res = await agent.post('/ingredients').send({ingredient_name:"pink salt", type: "seasoning"});
    expect(res.statusCode).toEqual(200);
    done();
  })
});
describe("Testing DELETE ingredients", () => {
  test('GET /ingredients', async done =>{
    knex('/ingredients').insert({id:100, ingredient_name:"Iron bar",type:"not an Ingredient"});
    const res = await agent.delete('/ingredients/100');
    expect(res.statusCode).toEqual(200);
    done();
  })
});
describe("Testing PUT ingredients", () => {
  test('PUT /ingredients', async done =>{
    knex('/ingredients').insert({id:100, ingredient_name:"Iron bar",type:"not an Ingredient"});
    const res = await agent.put('/ingredients/100').send({ingredient_name:"pink salt", type: "seasoning"});
    expect(res.statusCode).toEqual(200);
    expect(res.body).toContainAllKeys(['ingredient_name','type','id']);
    done();
  })
});
