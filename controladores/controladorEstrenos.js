const fs = require('fs');

const mostrarEstrenos =(req, res) => {

    const obtenerEstrenos = req.params.estreno;
    const dbPelicula = JSON.parse(fs.readFileSync('./BaseDeDatos/peliculas.json', 'utf-8'));

    const comprobarEstrenos = dbPelicula.peliculas.filter(pelicula => pelicula.estreno === obtenerEstrenos)
// console.log(comprobarEstrenos)
    if(comprobarEstrenos){
        return res
        .status(200)
        .send(comprobarEstrenos)
    }else{
        return res
        .status(400)
        .json({mensaje:'Valor no valido'})
    }
}

module.exports= mostrarEstrenos;