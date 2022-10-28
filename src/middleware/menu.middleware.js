const {
    DOES_NOT_HAVE_PERMISSON,
    USERNAME_IS_REQUIRED,
} = require('./../contants/error-types')

const service = require('./../service/role.service')
const { getUserId } = require('./../service/use.service')
const verifyMenu = async(ctx,next) => {
    const { roleId:id } = ctx.request.body;

    if( !id ) {
        const error = new Error(DOES_NOT_HAVE_PERMISSON)
        return ctx.app.emit('error',error,ctx)
    }   

    const result = await service.getRole(id);

    ctx.request.body.menuId = result[0].act_list.split(',').map(Number) // 转换成数组结构

    await next()
}

const verifyRole = async(ctx,next) => {
    
    const { id } = ctx.user;

    const result = await getUserId( id );

    ctx.request.body.roleId = result[0].role_id

    await next()

}



module.exports = {
    verifyRole,
    verifyMenu
}
