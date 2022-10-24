/**
 * 负责注册路由
 */

 const Router = require('koa-router');
 const adminRouter = new Router({prefix:'/admin'})
 
 const {
   verifyAuth
 } = require('../middleware/auth.middleware')
 
 const {
    //  create,
    getAdmin
 } = require('./../controller/admin.controller')
 
//  adminRouter.post('/', verifyAuth , create);
 adminRouter.post('/get' , getAdmin);
 
 module.exports = adminRouter