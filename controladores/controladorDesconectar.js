const fs = require('fs')

const controladorDesconectar = (req, res) =>{
    const user = req.body;
    const dbUser = JSON.parse(fs.readFileSync('./BaseDeDatos/usuarios.json', 'utf-8'))

    const buscarUsuario = dbUser.usuarios.find(usuario => usuario.correo === user.correo && usuario.contrasenya === user.contrasenya)
    const comprobarLogin = dbUser.usuarios.find(usuario => usuario.login === "True")
    if(buscarUsuario){
        if(comprobarLogin){
            comprobarLogin.login="false"
            fs.writeFileSync('./BaseDeDatos/usuarios.json', JSON.stringify(dbUser, null, 2));
            res
            .status(200)
            .json({mensaje:"Te has desconectado correctamente"})
        }else{
            res
            .status(401)
            .json({mensaje:"Ya estas desconectado"})
        }
    } else{
        res
        .status(400)
        .json({mensaje:"No se ha encontrado el usuario"})
    }

}

module.exports=controladorDesconectar