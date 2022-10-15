const Express= require("express")
const jwt= require("jsonwebtoken")
const llave = require("./llaveSecreta")
const verificacion = Express.Router()

const verifyJwt = async(ctx, next) => {
    console.log(ctx)
    let token=ctx.req.header['x-access-token'] || ctx.req.headers['authorization']
    if(!token){
        ctx.res.status(401).send({ mensaje:"No esta autorizado, tiene que logearse"} ) 
        return
    }
    if(token.startsWith("Bearer ")){
        token=token.slice(7,token.length)
    }

    if(token){

        jwt.verify(token,llave.llavesecreta,(error,decoded)=>{
            if (error){
                return ctx.res.send(
                    {
                        mensaje:
                        'Token Inválido'
                    }
                    
                    )
            }else{
                ctx.req.decoded=decoded
                next();
            }

        })


    }


}

module.exports = {
    verifyJwt
}