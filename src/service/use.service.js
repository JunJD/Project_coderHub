/**
 * 处理和数据库交互的
 */

class UserService {
    async create(user){
        // 将user存储到数据库中
        console.log(user);
        
        return `"创建用户成功"${user}`
    }   
}

module.exports = new UserService 
