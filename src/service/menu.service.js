/**
 * 处理和数据库交互的
 */
const connection = require('./../app/database')
class Menuservice {
    async create(menu){
        const {name,menuCode,parentId,path} = menu 
        console.log(menu)
        const statement = `INSERT INTO auth_menu ( name, menu_code, parent_id, path) VALUES (?,?,?,?)`        
        const result = await connection.execute(statement,[name,menuCode,parentId,path])
        console.log(result)
        return result
    }   

    async getMenu(){
        const statement = `select name,menu_code,parent_id,path from auth_menu`
        const result = await connection.execute(statement);
        return result[0];
    }
}

module.exports = new Menuservice 
