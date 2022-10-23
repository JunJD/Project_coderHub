const jwt = require('jsonwebtoken')
const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    USER__DOES_NOT_EXISTS,
    PASSWORD_IS_INCORRENT,
    UNAUTHORIZATION
} = require('../contants/error-types')

const { PUBLIC_KEY } = require('../app/config');
const md5password = require('../utils/password-handle')
const service = require('../service/use.service')

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
    ctx.user = user;
    await next()

}

const verifyAuth = async (ctx, next) => {
    // 1.获取token
    const authorization = ctx.headers.authorization;

    if (!authorization) {
      const error = new Error(UNAUTHORIZATION);
      return ctx.app.emit('error', error, ctx);
    }
    const token = authorization.replace('Bearer ', '');
    // 2.验证token(id/name/iat/exp)
    try {
      const result = jwt.verify(token, PUBLIC_KEY, {
        algorithms: ["RS256"]
      });
      ctx.user = result;
      await next();
    } catch (err) {
      const error = new Error(UNAUTHORIZATION);
      ctx.app.emit('error', error, ctx);
    }
  }

module.exports = {
    verifyLogin,
    verifyAuth
}