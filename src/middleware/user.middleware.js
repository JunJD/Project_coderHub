const {
    NAME_OR_PASSWORD_IS_REQUIRED
} = require('./../contants/error-types')
const verifyUser = async(ctx,next)=>{
    const { name, password } = ctx.request.body;
    
    if( !name || !password ) {
        const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error',error,ctx)
    }   

    await next()
}

module.exports = {
    verifyUser
}