const fs = require('fs');
const { generateId } = require('../utils')


const controladorRegistro = (req,res) => {
    const user = req.body;
    const dbUser = JSON.parse(fs.readFileSync('./BaseDeDatos/usuarios.json', 'utf-8'))
    
    const logintudcontrasenya = /.{8,12}/
    const nombreUsuario = dbUser.usuarios.some(usuario => usuario.usuario === user.usuario)
    if(!logintudcontrasenya.test(user.contrasenya)){
        return res
            .status(400)
            .json({mensaje: "La contrasenya tiene que tener entre 8 a 12 caracteres"})
    }
    if(nombreUsuario){
        return res
        .status(400)
        .json({mensaje:"El nombre de usuario ya existe"})
        
    }



    const ExisteUsuario = dbUser.usuarios.some(
        existe => existe.correo === user.correo);
        if(ExisteUsuario){
            return res
            .status(400)
            .json({ mensaje: `email ya existe`})
            }   
            user.idusuario = dbUser.usuarios.length + 1;
            user.token = generateId();
            user.login = "False";
            dbUser.usuarios.push(user)

            fs.writeFileSync('./BaseDeDatos/usuarios.json', JSON.stringify(dbUser, null, 2));

            res.status(200).json(user)

        };

        module.exports = controladorRegistro
    


