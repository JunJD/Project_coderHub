const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    USER__DOES_NOT_EXISTS,PASSWORD_IS_INCORRENT
} = require('./../contants/error-types')
const md5password = require('./../utils/password-handle')
const service = require('./../service/use.service')

const verifyLogin = async(ctx, next) => {
    const { name, password } = ctx.request.body
    
    if(!name || !password){
        const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }

    const result = await service.getUserName(name);
    const user = result[0];
    
    if(!user) {
        const error = new Error(USER__DOES_NOT_EXISTS)
        return ctx.app.emit('error', error, ctx)
    }

    if(md5password(password) !== user.password) {
        const error = new Error(PASSWORD_IS_INCORRENT)
        return ctx.app.emit('error', error, ctx)
    }

    await next()

}

module.exports = {
    verifyLogin
}