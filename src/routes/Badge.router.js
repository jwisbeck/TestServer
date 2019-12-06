const Koa = require('koa');
const  KoaBody = require('koa-body');
const Router = require('koa-router');
const knex = require('knex');
const { path } = require('path');
const knexCon = require('../../knexfile');
const knexObj = knex(knexCon.development);
const router = new Router();

const BadgeRepository = require('../Repositories/Badge.repostitory.js');

router.get('/badges', async ctx => {
  ctx.body = await BadgeRepository.findMany();
});

router.post('/badges', async ctx => {
  const { name,image,icon,description,points } = ctx.request.body;
  const badgeEntity = {
    name,
    image_filename,
    icon_filename,
    url_icon,
    url_image,
    description,
    points
  }
  const { id } = await BadgeRepository.createBadgeEntity(badgeEntity);
  ctx.body = await BadgesRepository.findById(id);
});

router.delete('badges/:badgeId', async ctx => {
  const { badgeId } = ctx.params;
  await BadgeRepository.remove(badgeId);
  ctx.body = { status: 'ok' };
});

router.put('badges/:badgeId', async ctx => {
  const { badgeId } = ctx.params;
  const { name,image,icon,description,points } = ctx.request.body;
  const badgeEntity = {
    name,
    image_filename,
    icon_filename,
    url_icon,
    url_image,
    description,
    points
  };
  await BadgeRepository.update(badgeId,badgeEntity);
  ctx.body = await BadgeRepository.findById(badgeId);
  ctx.status=200;
});
