const fs = require('fs');
const f = new Date();
let fechaActual = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear() + '  ' + f.getHours() + ':' + f.getMinutes();
let fechaEntregar = (f.getDate() + 5) + '/' + (f.getMonth() + 1) + '/' + f.getFullYear() + '  ' + f.getHours() + ':' + f.getMinutes();
const prueba = (req, res) => {
    const user = req.body;
    const dbEntrega = JSON.parse(fs.readFileSync('./BaseDeDatos/entrega.json', 'utf-8'));
    const dbPeliculas = JSON.parse(fs.readFileSync('./BaseDeDatos/peliculas.json', 'utf-8'));
    const dbUsuario = JSON.parse(fs.readFileSync('./BaseDeDatos/usuarios.json', 'utf-8'));

    const comprobacion = dbEntrega.entrega.some(encontrar => encontrar.idusuario === user.idusuario);
    const buscarPelicula = dbPeliculas.peliculas.find(pelicula => pelicula.idpelicula === user.idpelicula);
    const buscarUsuario = dbUsuario.usuarios.find(usuario => usuario.idusuario === user.idusuario);

    if(!comprobacion){
        if (buscarPelicula) {
            if (buscarUsuario) {
                user.nombre = buscarUsuario.nombre;
                user.correo = buscarUsuario.correo;
                user.title = buscarPelicula.title;
                user.fechaalquiler = fechaActual;
                user.fechaentrega = fechaEntregar;
                dbEntrega.entrega.push(user)
                fs.writeFileSync('./BaseDeDatos/entrega.json', JSON.stringify(dbEntrega, null, 2));
                // fs.writeFileSync('./BaseDeDatos/entrega.json', JSON.stringify(buscarUsuario, null, 2));
                res
                    .status(200)
                    .json({ mensaje: 'Ya te hemos enviado el pedido, tienes que devolverlo en 5 dias' })
            } else {
                res
                    .status(400)
                    .json({ mensaje: 'No se encontro al usuario' })
            }
        } else {
            res
                .status(400)
                .json({ mensaje: 'No se encontro la pelicula' })
        }
    }else{
        res
        .status(400)
        .json({mensaje:'Solo se puede alquilar una pelicula a la vez'})
    }

 }

module.exports = prueba