const Router = require('koa-router');
const views = require('koa-view');
const path = require('../path');
var questions = [
  {
    data: 213,
    num: 444,
    age: 12
  },
  {
    data: 456,
    num: 678,
    age: 13
  }
];
const router = new Router();
router.use(views(path + '/app'));
// console.log('path', path);
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello djq'
  });
});

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string';
});

router.post('/json', async (ctx, next) => {
  var data = {
    name: ctx.request.body.name,
    age: ctx.request.body.age,
    createdAt: Date.now()
  };
  if (data.name && data.age) {
    ctx.body = questions;
  } else {
    ctx.body = { err: 1, msg: 'invalid request' };
  }
});

module.exports = router;
