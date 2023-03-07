const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    const path = ctx.path;
    switch (path) {
        case '/':
            ctx.body = '<h1>Index Sayfasına Hoşgeldiniz</h1>'
            break;
        case '/hakkimda':
            ctx.body = '<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>'
            break;
        case '/iletisim':
            ctx.body = '<h1>İletişim Sayfasına Hoşgeldiniz</h1>'
            break;
        default:
            ctx.body = '<h1>Sayfa Bulunamadı</h1>'
            break;
    }
  });
const port = 3000;
app.listen(port, () => {
    console.log(`Server port ${port} de dinleniyor`);
})