/**
* 负责注册路由
*/
const Router = require('koa-router');
const autoRouter = new Router()
 
const {
    verifyLogin
} = require('./../middleware/auto.middleware')

const {
    login
} = require('./../controller/auto.controller')
 
 autoRouter.post('/login',verifyLogin,login);
 
 module.exports = autoRouter