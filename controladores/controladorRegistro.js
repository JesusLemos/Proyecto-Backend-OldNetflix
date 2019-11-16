const fs = require('fs');


const cRegistro = (req,res) => {
    const user = req.body;
    const dbUser = JSON.parse(fs.readFileSync('./BaseDeDatos/usuarios.json', 'utf-8'))


    const ExisteUsuario = dbUser.usuarios.some(
        existe => existe.email=== user.email);
        if(ExisteUsuario){
            return res
            .status(400)
            .json({ mensaje: `email ya existe`})
            }

            dbUser.usuarios.push(user)
            fs.writeFileSync('./BaseDeDatos/usuarios.json', JSON.stringify(dbUser, null, 2));

            res.status(200).json(user)

        };

        module.exports = cRegistro
    


