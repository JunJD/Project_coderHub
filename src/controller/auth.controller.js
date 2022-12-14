/**
 * 处理和路由请求后的的逻辑交互的
 */

//  const {create} = require('./../service/use.service')
 const jwt = require('jsonwebtoken');
 const { PRIVATE_KEY } = require('../app/config');
 class  AutoController {
     async login(ctx,next) {
         // 获取用户请求传递的参数
         const { id, name } = ctx.user;
        const token = jwt.sign({ id, name }, PRIVATE_KEY, {
           expiresIn: 60 * 60 * 24,
           algorithm: 'RS256'
        });
      

         // 返回数据
         ctx.body = {
            success:'true',
            message:"登录成功",
            accessToken :token,
            code:200,
            result:{
                success:'true',
                result:[
                    {code:1,value:'没数据'}
                ]
            }
         }
     }
 }
 
 module.exports = new AutoController();