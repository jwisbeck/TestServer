/* istanbul ignore next */
require('./core/env')();
const path = require('path');
const serve = require('koa-static');
const mount = require('koa-mount');
const koaBody = require('koa-bodyparser');
const Koa = require('koa');

const app = new Koa();

/* eslint-disable */
app.use(koaBody());
app.use(require('./core/exception.handler'));

app.use(require('./routes/auth.router'));
app.use(require('./routes/video.router'));
app.use(require('./routes/comments.router'));
app.use(require('./routes/contacts.router'));
app.use(require('./routes/profile.router'));
app.use(require('./routes/followers.router'));

/* istanbul ignore else  */
if (['development', 'test'].includes(process.env.NODE_ENV)) {
  app.use(require('./routes/swagger.router'));
  app.use(mount('/docs', serve(path.resolve(__dirname, '../static/docs'))));
}
app.use(async ctx => {
  ctx.throw(404, 'API endpoint not found');
});
/* eslint-enable */
/* istanbul ignore if  */
if (!module.parent) {
  app.listen(process.env.PORT, () => process.stdout.write(`Server listening on ${process.env.PORT}\n`));
}

module.exports = app;
