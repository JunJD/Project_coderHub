/**
 * 处理和数据库交互的
 */
 const connection = require('./../app/database')

 class Adminservice {
     async create( admin ){
         const { name, email, roleId, password} = admin 

         const statement = `INSERT INTO ng_admin ( user_name, email, password, role_id ) VALUES (?, ?, ?, ?)`

         const result = await connection.execute(statement,[name,email,password,roleId])

         return result
     }   
 
     async getAdmin(){

         const statement = `select id,user_name,email,salt,role_id from ng_admin`

         const result = await connection.execute(statement);

         return result[0];
     }
 }
 
 module.exports = new Adminservice
 