// 外部引入
const Koa = require("koa");
const bodyParser = require('koa-bodyparser')

// 内部引入--路由相关
const useRouter = require('./../router')

const errorHandle = require('./error-handle')

// 使用app 
const app = new Koa();

// 中间件
app.use(bodyParser())

// 路由
useRouter(app)

app.on('error',errorHandle)







module.exports = app;