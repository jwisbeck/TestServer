const Koa = require('koa');
const KoaBody = require('koa-body');

const app = new Koa();

app.use(KoaBody());
app.use(require('./old_routes/Dish.router'));
app.use(require('./old_routes/Ingredients.router'));
app.use(require('./old_routes/TheBook.router'));
app.use(require('./routes/Badge.router'));
app.use(require('./routes/User.router'));

if( process.env.NODE_ENV!=="test")
app.listen(process.env.PORT);
console.log("server started on",`${process.env.PORT}`);
module.exports=app;
