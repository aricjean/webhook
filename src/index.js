let Koa = require('koa');
// let KoaQuery = require('koa-query');
// import query from 'koa-query'

let KoaBody = require('koa-body');
let router = require('./router/index');

let app = new Koa();
const PORT = 10000;


// app.use(KoaQuery());
app.use(KoaBody());

app.use(router.routes());

app.listen(PORT, () => {
  console.log('server listened at port ', PORT);
});
