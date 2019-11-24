let Router = require('koa-router');
let wxgzhStudyKoaRouter = require('./wxgzh-study-koa');
let router = new Router();

router.use(wxgzhStudyKoaRouter.routes(), wxgzhStudyKoaRouter.allowedMethods());

module.exports = router;
