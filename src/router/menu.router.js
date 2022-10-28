/**
 * 负责注册路由
 */

const Router = require('koa-router');
const menuRouter = new Router({prefix:'/menu'})

const {
  verifyAuth
} = require('../middleware/auth.middleware')

const {
    create,
    getMenu
} = require('./../controller/menu.controller')

menuRouter.post('/', create);
menuRouter.post('/get' , verifyAuth, getMenu);
module.exports = menuRouter