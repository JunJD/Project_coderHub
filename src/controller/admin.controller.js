/**
 * 处理和路由请求后的的逻辑交互的
 */

 const { getAdmin, create } = require('./../service/admin.service')

 class  MenuController {
     async create(ctx,next) {
         // 获取用户请求传递的参数
         const admin = ctx.request.body
         // 查询数据
         const result = await create(admin)

         ctx.body = {
             success:'true',
             message:"返回用户数据",
             code:200,
             result:{
                 success:'true',
                 result:{
                     data:'ok'
                 }
             }
          }
     }
     async getAdmin(ctx,next) {
         // 获取用户请求传递的参数
         const { page, size, fuzzy } = ctx.request.body
         // 查询数据
         let result = await getAdmin()

         if( fuzzy ){
            result = result.filter(item => {
                return (item.user_name+"").toUpperCase().includes((fuzzy+"").toUpperCase())
            })
         }

         // 返回数据
         ctx.body = {
             success:'true',
             message:"返回用户数据",
             code:200,
             result:{
                 success:'true',
                 result:{
                     data:result
                 }
             }
          }
     }
 }
 
 module.exports = new MenuController();