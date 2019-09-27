const knex = require('knex');
const supertest = require('supertest');
const app = require('../../server');

const agent = supertest.agent(app.callback());
describe("Testing GET The book", () => {
  test('GET /the_book', async done =>{
    const res = await agent.get('/the_book');
    expect(res.statusCode).toEqual(200);
    done();
  })
});
describe("Testing POST the_book", () => {
  test('GET /the_book', async done =>{
    const res = await agent.post('/the_book').send({ dish_id:1,ingredients_id:1,amount:"not an amount"});
    expect(res.statusCode).toEqual(200);
    done();
  })
});
describe("Testing DELETE the_book", () => {
  test('GET /the_book', async done =>{
    knex('/the_book').insert({id:100, dish_id:1, ingredients_id:1, amount:"not an amount"});
    const res = await agent.delete('/the_book/100');
    expect(res.statusCode).toEqual(200);

    done();
  })
});
describe("Testing PUT the_book", () => {
  test('PUT /the_book', async done =>{
    knex('/ingredients').insert({id:1, ingredient_name:"Car",type:"not food"});

    knex('/the_book').insert({id:100, dish_id:1,ingredient_id:1,amount:"not an amount"});

    const res = await agent.put('/the_book/100').send({dish_id:1,ingredient_id:1, amount: "updated amount"});
    expect(res.statusCode).toEqual(200);
    expect(res.body).toContainAllKeys(['ingredient_name','type','id']);
    done();
  })
});
