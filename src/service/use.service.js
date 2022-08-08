/**
 * 处理和数据库交互的
 */
const connection = require('./../app/database')
class UserService {
    async create(user){
        const {name,password} = user 

        const statement = `INSERT INTO users (name,password) VALUES (?,?)`
        
        const result = await connection.execute(statement,[name,password])
        
        return result
    }   

    async getUserName(name){
        const statement = `Select * from users where name = ?;`
        const result = await connection.execute(statement,[name]);
        return result[0];
    }
}

module.exports = new UserService 
