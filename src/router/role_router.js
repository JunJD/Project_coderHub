/**
 * 负责注册路由
 */

 const Router = require('koa-router');
 const roleRouter = new Router({prefix:'/role'})
 
//  const {
//    verifyAuth
//  } = require('../middleware/auth.middleware')
 
 const {
    //  create,
     getRole
 } = require('./../controller/role.controller')
 
//  menuRouter.post('/', verifyAuth , create);
 roleRouter.post('/get' , getRole);
 
 module.exports = roleRouter