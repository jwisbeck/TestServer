const Koa = require('Koa');
const  KoaBody = require('koa-body');
const Router = require('koa-router');
const knex = require('knex');
const { path } = require('path');
const knexCon = require('../../knexfile');
const knexObj = knex(knexCon.development);
const router = new Router();

const CarRepository = require('../Repositories/Car.repostitory.js');
const CarOwnerRepository = require('../Repositories/CarOwner.repostitory.js');

router.get('/cars', async ctx => {
  ctx.body = await CarRepository.findMany();
});
router.get('/owners', async ctx => {
  ctx.body = await CarOwnerRepository.findMany();
});

router.post('/owners/:ownerId/cars', async ctx => {
  const { make,model,year,description } = ctx.request.body;
  const { ownerId } = ctx.params;
  const carEntity = {
    ownerId,make,model,color,year,description
  }
  const { id } = await CarRepository.createCarEntity(carEntity);
  ctx.body = await CarRepository.findById(id);
});

router.post('/owners', async ctx => {
  const { name } = ctx.request.body;
  const carEntity = {
    name
  }
  const { id } = await CarOwnerRepository.createDishEntity(carEntity);

  ctx.body = await CarOwnerRepository.findById(id);
});
router.delete('/:ownerId', async ctx => {
  const { ownerId } = ctx.params;
  await CarOwnerRepository.remove(ownerId);
  ctx.body = { status: 'ok' };
});
router.delete('cars/:carId', async ctx => {
  const { carId } = ctx.params;
  await CarRepository.remove(carId);
  ctx.body = { status: 'ok' };
});

router.put('owners/:ownerId/cars/:carId', async ctx => {
  const { owner,carId } = ctx.params;
  const { color, ownerId, description } = ctx.request.body;
  const carEntity = {
    color,
    description,
    ownerId
  };
  await CarRepository.update(carId,carEntity);
  ctx.body = await CarRepository.findById(carId);
  ctx.status=200;
});
router.put('owners/:ownerId', async ctx => {
  const { ownerId } = ctx.params;
  const { name } = ctx.request.body;
  const ownerEntity = {
    name
  };
  await CarOwnerRepository.update(ownerId,ownerEntity);
  ctx.body = await CarOwnerRepository.findById(ownerId);
  ctx.status=200;
});
