const fs = require('fs');

const peliculasPopulares = (req, res) => {
    const dbPeliculas = JSON.parse(fs.readFileSync('./BaseDeDatos/peliculas.json', 'utf-8'));
    const peliculasPopulares = dbPeliculas.peliculas.filter(pelicula => pelicula.popularity >75.000)
    if(peliculasPopulares){
        res
        .status(200)
        .send(peliculasPopulares);
    }else{
        res
        .status(400)
        .json({mensaje:"Algo fallo"});
    }
   
        
  

}

module.exports = peliculasPopulares;