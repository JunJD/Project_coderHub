/**
 * 处理和数据库交互的
 */
 const connection = require('./../app/database')
 class Adminservice {
    //  async create(admin){
    //      const {name,menuCode,parentId,path} = admin 
    //      const statement = `INSERT INTO auth_menu ( name, menu_code, parent_id, path) VALUES (?,?,?,?)`        
    //      const result = await connection.execute(statement,[name,menuCode,parentId,path])
    //      console.log(result)
    //      return result
    //  }   
 
     async getAdmin(){
         const statement = `select id,user_name,email,salt,role_id from ng_admin`
         const result = await connection.execute(statement);
         return result[0];
     }
 }
 
 module.exports = new Adminservice 
 