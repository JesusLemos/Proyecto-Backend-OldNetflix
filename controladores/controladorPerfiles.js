const fs = require('fs');

const perfiles = (req, res) => {

    const user = req.params;
    const dbUser = JSON.parse(fs.readFileSync('./BaseDeDatos/usuarios.json', 'utf-8'))

    const encontrarUsuario = dbUser.usuarios.find(usuarios => usuarios.token === user.token && usuarios.usuario === user.usuario);

    if(encontrarUsuario){
        res
        .status(200)
        .send(encontrarUsuario)
    }else{
        res
        .status(400)
        .json({mensaje:`El token que has introducido no coindice`})
    }
}

module.exports=perfiles