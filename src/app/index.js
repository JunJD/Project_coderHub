// 外部引入
const Koa = require("koa");
const bodyParser = require('koa-bodyparser')

// 内部引入--路由相关
const useRouter = require('./../router')

const errorHandle = require('./error-handle')

// 使用app 
const app = new Koa();

// 中间件
/* 跨域设置 */
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');//访问控制允许来源：*为所有
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild, token'); //访问控制允许报头Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//访问控制允许方法
    ctx.set('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200; //OPTIONS类型的请求直接返回200
    } else {
        await next();
    }
});

app.use(bodyParser())

// 路由
useRouter(app)

app.on('error',errorHandle)







module.exports = app;