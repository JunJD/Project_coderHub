/**
 * 处理和路由请求后的的逻辑交互的
 */

 const { getMenu } = require('../service/menu.service');
 const {getRole} = require('./../service/role.service');

 class  RoleController {
     async getRole(ctx,next) {
        const {id} = ctx.user ;
         // 查询数据
         const result = await getRole(id)
         
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
 
 module.exports = new RoleController();