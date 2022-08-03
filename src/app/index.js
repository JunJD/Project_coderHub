// 外部引入
const Koa = require("koa");
const bodyParser = require('koa-bodyparser')

// 内部引入--路由相关
const userRouter = require('./../router/user.router')

// 使用app 
const app = new Koa();

// 中间件
app.use(bodyParser())
app.use(userRouter.routes())// 用来注册路由使路由生效
app.use(userRouter.allowedMethods());// 限制前端使用正确的请求方式  









module.exports = app;