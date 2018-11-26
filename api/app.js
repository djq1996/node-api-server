const Koa = require('koa');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());
app.use(router.routes());
const port = 3000;
app.listen(port, () => {
  console.log(`server is starting at port ${port}`);
});
