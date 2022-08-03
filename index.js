const Koa = require("koa");

const app = new Koa();

app.listen(8000,err=>{
    if(err) {console.log(err);}
    console.log('8000端口启动成功')
})