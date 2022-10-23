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

menuRouter.post('/', verifyAuth , create);
menuRouter.post('/get' , getMenu);

module.exports = menuRouter