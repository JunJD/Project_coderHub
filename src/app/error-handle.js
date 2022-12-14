const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    USER_ALREADY_EXISTS,
    USER__DOES_NOT_EXISTS,
    PASSWORD_IS_INCORRENT,
    UNAUTHORIZATION,
    USERNAME_IS_REQUIRED,
    DOES_NOT_HAVE_PERMISSON
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
        case USER__DOES_NOT_EXISTS:
            status = 402;
            message = "用户名不存在";
            break;
        case PASSWORD_IS_INCORRENT:
            status = 402;
            message = "密码错误";
            break;
        case UNAUTHORIZATION:
            status = 401; // 参数错误
            message = "无效的token~";
            break;
        case USERNAME_IS_REQUIRED:
            status = 401; // 参数错误
            message = "用户名必填";
            break;
        case DOES_NOT_HAVE_PERMISSON:
            status = 401; // 参数错误
            message = "请先给此用户配置权限";
            break;
        default:
            status = 404;
            message = 'NOT FOUND 1--';
    }

    ctx.status = status
    ctx.body = message
}

module.exports = errorHandle