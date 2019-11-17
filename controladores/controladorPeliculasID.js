const fs = require('fs')

const mostrarPeliculaID = (req, res) => {

 const pelicula = req.body;
 const dbPeliculas = JSON.parse(fs.readFileSync('./BaseDeDatos/peliculas.json', 'utf-8'))
 const filtroID = dbPeliculas.peliculas.find(peliculas => peliculas.id === pelicula.id)

    
 
 if (filtroID){
        res
        .status(200)
        .send(filtroID)
    }else{
        
        res
        .status(400)
        .send(filtroID)
        .json({mensaje:"Error id no encontrado"})
    }
}

module.exports=mostrarPeliculaID;