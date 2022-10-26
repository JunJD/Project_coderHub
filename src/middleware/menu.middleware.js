const {
    DOES_NOT_HAVE_PERMISSON,
    USERNAME_IS_REQUIRED,
} = require('./../contants/error-types')

const service = require('./../service/role.service')
const { getUserName } = require('./../service/use.service')
const verifyMenu = async(ctx,next) => {
    const { roleId:id } = ctx.request.body;
    if( !id ) {
        const error = new Error(DOES_NOT_HAVE_PERMISSON)
        return ctx.app.emit('error',error,ctx)
    }   

    const result = await service.getRole(id);

    ctx.request.body.menuId = result[0].act_list.split(',').map(Number)

    await next()
}

const verifyRole = async(ctx,next) => {

    const { user_name } = ctx.request.body;
    console.log(user_name)
    if( !user_name ) {
        const error = new Error(USERNAME_IS_REQUIRED)
        return ctx.app.emit('error',error,ctx)
    }   

    const result = await getUserName( user_name );

    ctx.request.body.roleId = result[0].role_id

    await next()

}



module.exports = {
    verifyRole,
    verifyMenu
}
