/**
 * 负责注册路由
 */

 const Router = require('koa-router');
 const roleRouter = new Router({prefix:'/role'})
 
 const {
   verifyAuth
 } = require('../middleware/auth.middleware')
 
 const {
    //  create,
     getRole
 } = require('./../controller/role.controller')
 
 roleRouter.post('/get' , verifyAuth, getRole);
 
 module.exports = roleRouter