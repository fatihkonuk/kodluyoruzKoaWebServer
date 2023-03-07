const Kao = require('kao');
const app = new Kao();

app.use(ctx => {
    ctx.body = 'Hello Koa';
  });

const port = 3000;
app.listen(port, () => {
    console.log(`Server port ${port} de dinleniyor`);
})