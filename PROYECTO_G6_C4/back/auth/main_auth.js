const jwt = require('jsonwebtoken');

const auth = (req, res, next) =>{

   

    try{
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, "__recret__")
        req.usuario = decoded
        next()

        //Otra forma de hacer lo mismo que lo de las lineas 8 a 11
        // jwt.verify(token, '__recret__', (err, verifiedJwt) => {
        //     if(err){
        //       res.send(err.message)
        //     }else{
        //          res.send(verifiedJwt)
        //       next()
        //     }
        //   })

        
    }catch(error){
        res.status(401)
        res.json({code:4, msg: "No tiene autorizacion", token:token})
    }
    
}

module.exports = auth;