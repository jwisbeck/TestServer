const Koa = require('Koa');
const  KoaBody = require('koa-body');
const Router = require('koa-router');
const knex = require('knex');
const { path } = require('path');
const knexCon = require('../../knexfile');
const knexObj = knex(knexCon.development);
const router = new Router();
const DishRepository = require('../Repositories/Dish.repository.js');

const IngredientsRepository = require('../Repositories/Ingredients.repository.js');
const TheBookRepository = require('../Repositories/TheBook.repository.js');
router.prefix('/the_book');

router.get('/', async ctx => {
  //console.log('get test',ctx.params, ctx.request.body, ctx.request.query);
  ctx.body = await TheBookRepository.findMany();
});
router.get('/:dishId', async ctx => {
  //console.log('get recipe test',ctx.params, ctx.request.body, ctx.request.query);
  const { dishId } = ctx.params;
  const dish = await TheBookRepository.findById(dishId);
  const ingredients = await TheBookRepository.findAllIngredientNames(dishId);

  ctx.body={dish:dish,ingredients:ingredients};

});

router.post('/', async ctx => {
  //console.log('post test',ctx.params, ctx.request.body, ctx.request.query);
  const { dish_id, ingredient_id, amount } = ctx.request.body;
  const bookEntity = {
    dish_id, ingredient_id, amount
  }
  const { id } = await TheBookRepository.createBookEntity({
    dish_id,
    ingredient_id,
    amount
  });

  ctx.body = await TheBookRepository.findById(id);
});

router.delete('/:bookId', async ctx => {
  const { bookId } = ctx.params;
  await TheBookRepository.remove(bookId);
  ctx.body = { status: 'ok' };

});

router.put('/:bookId', async ctx => {
  //console.log('put test unimplemented',ctx.params, ctx.request.body, ctx.request.query);
  const { bookId } = ctx.params;
  const { ingredient_id, dish_id, amount } = ctx.request.body;
  const bookEntity = {
    ingredient_id, dish_id, amount
  };
  await TheBookRepository.update(bookId,bookEntity);
  ctx.body = await TheBookRepository.findById(bookId);
  ctx.statusCode=200;

});
module.exports = router.routes();
