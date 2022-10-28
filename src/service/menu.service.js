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

    async getMenu(id){

        const statement = `
        SELECT 
            am.id id, am.name label, am.icon_url icon, am.parent_id parentId, am.path path
        from user_role ur LEFT JOIN role_access ra ON  ur.role_id = ra.role_id
        LEFT JOIN auth_menu am ON am.id = ra.access_id
        WHERE am.is_delete = 0 and ur.uid = ?  
        ;`

        const result = await connection.execute(statement,[id]);

        return result[0];
    }

    
}

module.exports = new Menuservice 
