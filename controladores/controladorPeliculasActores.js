const fs = require('fs')

const filtroActor = (req, res ) => {
    const actor = req.params.actor
    const dbPelicula = JSON.parse(fs.readFileSync('./BaseDeDatos/peliculas.json', 'utf-8')) 

    const buscarActor = dbPelicula.peliculas.filter(peliculasActor => peliculasActor.actor === actor)
    if(buscarActor){
        res
        .status(200)
        .send(buscarActor)
    }else{
        res
        .status(400)
        .json({mensaje:"No se encontro el actor"})
    }
}

module.exports= filtroActor;