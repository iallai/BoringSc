//START node --harmony bootStrap.js
var koa=require('koa');
var app=new koa();

app.use(function *(next){
    this.body='Hello world';
});
console.info("服务器已经启动在3000端口");
app.listen(3000);