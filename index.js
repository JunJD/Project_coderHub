const app = require('./src/app')
const config = require('./src/app/config')
 require('./src/app/database')
app.listen(config.APP_PORT,err=>{
    if(err) {console.log(err);}
    console.log(`${config.APP_PORT}端口启动成功`)
});

