/**
 * 处理和数据库交互的
 */
const connection = require('./../app/database')
class UserService {
    async create(user){
        const {name,password} = user 
        console.log(password)
        const statement = `INSERT INTO ng_admin (user_name,password) VALUES (?,?)`
        
        const result = await connection.execute(statement,[name,password])
        
        return result
    }   

    async getUserName(name){
        const statement = `Select * from ng_admin where user_name = ?;`
        const result = await connection.execute(statement,[name]);
        return result[0];
    }

    async getUserId(id){
        const statement = `Select * from ng_admin where id = ?;`
        const result = await connection.execute(statement,[id]);
        return result[0];
    }

}

module.exports = new UserService 
