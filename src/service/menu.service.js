/**
 * 处理和数据库交互的
 */
const connection = require('./../app/database')
class Menuservice {
    async create(menu){
        const {name,menuCode,parentId,path} = menu
        const statement = `INSERT INTO auth_menu ( name, menu_code, parent_id, path) VALUES (?,?,?,?)`        
        const result = await connection.execute(statement,[name,menuCode,parentId,path])
        return result
    }   

    async getMenu(){
        const statement = `select id, name,menu_code,parent_id,path,is_delete from auth_menu`
        const result = await connection.execute(statement);
        let data = result[0].map(item=>({
            parentId:item.parent_id,
            label: item.name,
            key: item.path,
            id:item.id,
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
        return convert(data);
    }
}

module.exports = new Menuservice 
