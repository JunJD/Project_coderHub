/**
 * 处理和数据库交互的
 */
 const connection = require('./../app/database')
 class Roleservice {
        
     async getRole(id){
        
        const statement = `
            SELECT 
                a.id id,
                JSON_OBJECT('id', r.id, 'label', r.role_name ) role
            from user_role a
            LEFT JOIN ng_role r ON r.id = a.role_id
            WHERE a.uid = ?
        ;`

        const result = await connection.execute(statement,[id]);
        return result[0];
     }
 }
 
 module.exports = new Roleservice 
 