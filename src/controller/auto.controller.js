/**
 * 处理和路由请求后的的逻辑交互的
 */

//  const {create} = require('./../service/use.service')

 class  AutoController {
     async login(ctx,next) {
         // 获取用户请求传递的参数
         const {name} = ctx.request.body
         
         // 查询数据

         // 返回数据
         ctx.body = "登录成功"
     }
 }
 
 module.exports = new AutoController();