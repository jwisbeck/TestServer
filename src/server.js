const Koa = require('koa');
const KoaBody = require('koa-body');

const app = new Koa();

app.use(KoaBody());
app.use(require('./routes/Dish.router'));
app.use(require('./routes/Ingredients.router'));
app.use(require('./routes/TheBook.router'));
if( process.env.NODE_ENV!=="test")
app.listen('3000');
//console.log("server started");
module.exports=app;
