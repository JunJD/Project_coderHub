/**
 * 处理和路由请求后的的逻辑交互的
 */

 const { getMenu } = require('../service/menu.service');
 const {getRole} = require('./../service/role.service');

 class  RoleController {
     async getRole(ctx,next) {
         const {id} = ctx.request.body
         // 查询数据
         const result0 = await getRole(id)

         const arr = result0[0].act_list.split(',').map(Number)

         const result1 = await getMenu()
         const result = result1[0].filter(item => {
           return arr.find(i=>i===item.id)
         })
         console.log(result)
         // 返回数据
         ctx.body = result
     }
 }
 
 module.exports = new RoleController();