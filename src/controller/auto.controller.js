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
         ctx.body = {
            success:'true',
            message:"登录成功",
            data:{
                token:{
                    admin : "admin-token",
                    guest : "guest-token",
                    editor : "editor-token"
                },
            },
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