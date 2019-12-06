const Koa = require('Koa');
const  KoaBody = require('koa-body');
const Router = require('koa-router');
const knex = require('knex');
const { path } = require('path');
const knexCon = require('../../knexfile');
const knexObj = knex(knexCon.development);
const router = new Router();

const IngredientsRepository = require('../old_repositories/Ingredients.repository.js');
router.prefix('/ingredients');

router.get('/', async ctx => {
  //console.log('get test',ctx.params, ctx.request.body, ctx.request.query);
  ctx.body = await IngredientsRepository.findMany();
});


router.post('/', async ctx => {
  //console.log('post test',ctx.params, ctx.request.body, ctx.request.query);
  const { type, ingredient_name } = ctx.request.body;
  const ingredientEntity = {
    type, ingredient_name
  };
  const { id } = await IngredientsRepository.createIngredientEntity(ingredientEntity);
  ctx.body = await IngredientsRepository.findById(id);
});


router.delete('/:ingredientId', async ctx => {
//console.log('delete test unimplemented',ctx.params, ctx.request.body, ctx.request.query);
  const { ingredientId } = ctx.params;
  await IngredientsRepository.remove(ingredientId);
  ctx.body = { status: 'ok' };

});

router.put('/:ingredientId', async ctx => {
  console.log('put test',ctx.params, ctx.request.body, ctx.request.query);
  const { ingredientId } = ctx.params;
  const { ingredient_name, type } = ctx.request.body;
  const ingredientEntity = {
    type, ingredient_name
  };

  await IngredientsRepository.update(ingredientId,ingredientEntity);
  ctx.body = await IngredientsRepository.findById(ingredientId);

});
module.exports = router.routes();
