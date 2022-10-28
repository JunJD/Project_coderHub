/**
 * 处理和路由请求后的的逻辑交互的
 */

const { create, getMenu } = require('./../service/menu.service')

class  MenuController {
    async create(ctx,next) {
        // 获取用户请求传递的参数
        const menu = ctx.request.body
        // 查询数据
        const result = await create(menu)
        // 返回数据
        ctx.body = result
    }

    async getMenu(ctx,next) {
        const {id} = ctx.user ;
        // 查询数据
        const result = await getMenu(id)

        function convert(list) {
            const res = []
            const map = list.reduce((res, v) => (res[v.id] = v, res), {})
            for (const key in map) {
                    if (map[key].parentId === 0) {
                        res.push(map[key])
                        continue
                    }

                if (map[key].parentId in map) {
                    const parent = map[map[key].parentId]
                    parent.children = parent.children || []
                    parent.children.push(map[key])
                }

            }
            return res
        }
        // 返回数据
        ctx.body = {
            success:'true',
            message:"返回菜单",
            code:200,
            result:{
                success:'true',
                result:{
                    data:convert(result)
                }
            }
         }
    }
}

module.exports = new MenuController();