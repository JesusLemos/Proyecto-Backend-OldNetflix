const fs = require('fs')

const mostrarPeliculaGenero = (req, res) => {

 const pelicula = req.params;
 const dbPeliculas = JSON.parse(fs.readFileSync('./BaseDeDatos/peliculas.json', 'utf-8'))
 const filtroID = dbPeliculas.peliculas.filter(peliculas => peliculas.genre === pelicula.genre)

    
 
 if (filtroID){
        res
        .status(200)
        .send(filtroID)
    }else{
        
        res
        .status(400)
        .send(filtroID)
        .json({mensaje:"Error nombre de genero no encontrado"})
    }
}

module.exports=mostrarPeliculaGenero;