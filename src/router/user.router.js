/**
 * 负责注册路由
 */

const Router = require('koa-router');
const userRouter = new Router({prefix:'/users'})

const {
    verifyUser
} = require('./../middleware/user.middleware')

const {
    create
} = require('./../controller/user.controller')

userRouter.post('/',verifyUser,create);

module.exports = userRouter