const fs = require('fs')

const controladorLogin = (req, res) => {
    const user = req.body;
    const dbUser = JSON.parse(fs.readFileSync('./BaseDeDatos/usuarios.json', 'utf-8'))



    const buscarUsuario = dbUser.usuarios.find(usuario => usuario.correo === user.correo && usuario.contrasenya === user.contrasenya)

    if (buscarUsuario) {
        buscarUsuario.login = "True"
        fs.writeFileSync('./BaseDeDatos/usuarios.json', JSON.stringify(dbUser, null, 2));

        res
            .status(200)
            .json({ mensaje: "Te has conectado correctamente" })
    } else {
        // console.log({buscarUsuario})
        res
            .status(400)
            .json({ mensaje: "El nombre o la contraseña no coinciden" })
    }
}

module.exports=controladorLogin;