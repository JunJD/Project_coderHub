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
        const statement = `select id, name,menu_code,parent_id,path,icon_url,is_delete from auth_menu`
        const result = await connection.execute(statement);

        return result;
    }
}

module.exports = new Menuservice 
