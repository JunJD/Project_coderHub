const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    USER_ALREADY_EXISTS
} = require('./../contants/error-types')

const service = require('./../service/use.service')
const verifyUser = async(ctx,next)=>{
    const { name, password } = ctx.request.body;
    
    if( !name || !password ) {
        const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error',error,ctx)
    }   

    const result = await service.getUserName(name);

    if(result[0].length){
        const error = new Error(USER_ALREADY_EXISTS)
        return ctx.app.emit('error',error,ctx)
    }

    await next()
}

module.exports = {
    verifyUser
}
