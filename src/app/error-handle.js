const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    USER_ALREADY_EXISTS
} = require('./../contants/error-types')

const errorHandle = (error,ctx) => {
    let status,message;
    switch(error.message) {
        case NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400;
            message = "用户名或者密码不能为空";
            break;
        case USER_ALREADY_EXISTS:
            status = 400;
            message = "用户名重复";
            break;
        default:
            status = 404;
            message = 'NOT FOUND 1--';
    }

    ctx.status = status
    ctx.body = message
}

module.exports = errorHandle