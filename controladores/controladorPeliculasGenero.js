const fs = require('fs')

const filtroGenero = (req, res) => {

 const pelicula = req.params.genre;
 const dbPeliculas = JSON.parse(fs.readFileSync('./BaseDeDatos/peliculas.json', 'utf-8'))
 const filtroID = dbPeliculas.peliculas.filter(peliculas => peliculas.genre === pelicula)
console.log(filtroID)
    
 
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

module.exports=filtroGenero;