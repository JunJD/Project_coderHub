/**
 * 处理和路由请求后的的逻辑交互的
 */

const {create} = require('./../service/use.service')

class  UserController {
    async create(ctx,next) {
        // 获取用户请求传递的参数
        const user = ctx.request.body
        
        // 查询数据
        const result = await create(user)
        // 返回数据
        ctx.body = result
    }
}

module.exports = new UserController();