/**
 * 处理和路由请求后的的逻辑交互的
 */

 const { getAdmin } = require('./../service/admin.service')

 class  MenuController {
    //  async create(ctx,next) {
    //      // 获取用户请求传递的参数
    //      const menu = ctx.request.body
    //      // 查询数据
    //      const result = await create(menu)
    //      // 返回数据
    //      ctx.body = result
    //  }
     async getAdmin(ctx,next) {
         // 获取用户请求传递的参数
         // 查询数据
         const result = await getAdmin()
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