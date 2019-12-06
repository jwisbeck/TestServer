const Koa = require('koa');
const  KoaBody = require('koa-body');
const Router = require('koa-router');
const knex = require('knex');
const { path } = require('path');
const knexCon = require('../../knexfile');
const knexObj = knex(knexCon.development);
const router = new Router();

const DishRepository = require('../old_repositories/Dish.repository.js');
router.prefix('/dishes');

router.get('/', async ctx => {
  //console.log('get test',ctx.params, ctx.request.body, ctx.request.query);
  //ctx.status=200;
  ctx.body = await DishRepository.findMany();
});

router.post('/', async ctx => {
  //await console.log('post test',ctx.params, ctx.request.body, ctx.request.query);
  const { dish_name, description } = ctx.request.body;
  const dishEntity = {
    dish_name,
    description
  }
  const { id } = await DishRepository.createDishEntity({
    dish_name,
    description
  });
  //await console.log(id);
  //ctx.status = 201;
  ctx.body = await DishRepository.findById(id);
});

router.delete('/:dishId', async ctx => {
  //console.log('delete test unimplemented',ctx.params, ctx.request.body, ctx.request.query);
  const { dishId } = ctx.params;
  await DishRepository.remove(dishId);
  ctx.body = { status: 'ok' };
});

router.put('/:dishId', async ctx => {
  //console.log('put test unimplemented',ctx.params, ctx.request.body, ctx.request.query);
  const { dishId } = ctx.params;
  const { dish_name, description } = ctx.request.body;
  const dishEntity = {
    dish_name,
    description
  };
  await DishRepository.update(dishId,dishEntity);
  ctx.body = await DishRepository.findById(dishId);
  ctx.status=200;
});
module.exports = router.routes();
