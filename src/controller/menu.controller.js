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
        // 获取用户请求传递的参数
        const {menuId} = ctx.request.body
        // 查询数据
        const resultOrigin = await getMenu()
        // console.log(resultOrigin[0],menuId)
        const result = resultOrigin[0].filter(item => Boolean(menuId.find(i=>i===item.id)))

        let data = result.map(item=>({
            parentId:item.parent_id,
            label: item.name,
            key: item.path,
            id:item.id,
            icon:item.icon_url,
            idDelete:Boolean(item.is_delete === 0)
        })).filter(item=>item.idDelete)
        function convert(list) {
            const res = []
            const map = list.reduce((res, v) => (res[v.id] = v, res), {})
            for (const item of list) {
                if (item.parentId === 0) {
                    res.push(item)
                    continue
                }
                if (item.parentId in map) {
                    const parent = map[item.parentId]
                    parent.children = parent.children || []
                    parent.children.push(item)
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
                    data:convert(data)
                }
            }
         }
    }
}

module.exports = new MenuController();