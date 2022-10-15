const mysql = require('mysql2')
const {
    MYSQL_HOST:host,
    MYSQL_PORT:port,
    MYSQL_DATABASE:database,
    MYSQL_USER:user,
    MYSQL_PASSWORD:password
} = require('./config')

const connections = mysql.createPool({
    host,
    port,
    database,
    user,
    password
})

connections.getConnection((err,conn)=>{    
    try {
        if(err)console.log('链接失败：',err);

    conn.connect(err=>{        
        console.log('数据库链接成功');
    })
    } catch (error) {
      console.log('出错了')  
    }
})

module.exports = connections.promise()