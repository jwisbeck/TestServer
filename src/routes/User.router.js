const Koa = require('koa');
const  KoaBody = require('koa-body');
const Router = require('koa-router');
const knex = require('knex');
const { path } = require('path');
const knexCon = require('../../knexfile');
const knexObj = knex(knexCon.development);
const router = new Router();

const UserRepository = require('../Repositories/User.repository.js');

router.get('/users', async ctx => {
  ctx.body = await UserRepository.findMany();
});
router.get('/users/:userId', async ctx => {
  const { userId } = ctx.params;
  ctx.body = await UserRepository.findById(userId);
});

router.post('/users', async ctx => {
  const { name } = ctx.request.body;
  const userEntity = {
    name
  }
  const { id } = await UserRepository.createUserEntity(userEntity);
  ctx.body = await UserRepository.findById(id);
});

router.delete('users/:userId', async ctx => {
  const { userId } = ctx.params;
  await UserRepository.remove(userId);
  ctx.body = { status: 'ok' };
});

router.put('user/:userId', async ctx => {
  const { userId } = ctx.params;
  const { name } = ctx.request.body;
  const userEntity = {
    name
  };
  await UserRepository.update(userId,userEntity);
  ctx.body = await UserRepository.findById(userId);
  ctx.status=200;
});

module.exports = router.routes();
