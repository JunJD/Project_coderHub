/**
* 负责注册路由
*/
const Router = require('koa-router');
const autoRouter = new Router()
 
const {
    verifyLogin
} = require('../middleware/auth.middleware')

const {
    login
} = require('../controller/auth.controller')
 
 autoRouter.post('/login',verifyLogin,login);
 
 module.exports = autoRouter