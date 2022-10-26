/**
 * 处理和数据库交互的
 */
 const connection = require('./../app/database')
 class Roleservice {
        
     async getRole(id){
        const statement = `Select * from ng_role where id = ?;`
        const result = await connection.execute(statement,[id]);
        return result[0];
     }
 }
 
 module.exports = new Roleservice 
 