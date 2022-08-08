const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    USER_ALREADY_EXISTS
} = require('./../contants/error-types')
const md5password = require('./../utils/password-handle')
const service = require('./../service/use.service')
const verifyUser = async(ctx,next) => {
    const { name, password } = ctx.request.body;
    if( !name || !password ) {
        const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error',error,ctx)
    }   

    const result = await service.getUserName(name);

    if(result.length){
        const error = new Error(USER_ALREADY_EXISTS)
        return ctx.app.emit('error',error,ctx)
    }

    await next()
}

const handlePassword = async(ctx,next) => {
    const {password} = ctx.request.body;
    ctx.request.body.password = md5password(password)
    await next();   

}



module.exports = {
    verifyUser,
    handlePassword
}
