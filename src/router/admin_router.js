/**
 * 负责注册路由
 */

 const Router = require('koa-router');
 const adminRouter = new Router({prefix:'/admin'})
 
 const {
   verifyAuth
 } = require('../middleware/auth.middleware')
 

 const {
  verifyUser,
  handlePassword
} = require('./../middleware/user.middleware')

 const {
     create,
    getAdmin
 } = require('./../controller/admin.controller')
 
 adminRouter.post('/' , verifyAuth, verifyUser, handlePassword, create);
 adminRouter.post('/get' , getAdmin);
 
 module.exports = adminRouter