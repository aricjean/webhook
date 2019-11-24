let Router = require('koa-router');
let router = new Router();

router.post('/wxgzh-study-koa', async (ctx, next) => {
  console.log('ctx.body,', ctx.body);
  ctx.body = 'success';
  await next();
});

router.get('/wxgzh-study-koa', async (ctx, next) => {
  console.log('ctx.req.query,');
  console.log(ctx.req.query);
  console.log('ctx.request.query,', ctx.request.query);
  console.log('ctx.body,', ctx.body);

  // ctx.body = 'success';
  ctx.body = ctx.request.query;
  await next();

});

module.exports = router;
