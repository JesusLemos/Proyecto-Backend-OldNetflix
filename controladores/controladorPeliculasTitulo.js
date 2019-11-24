const fs = require('fs');


const mostrarPeliculasTitulo = (req, res) => {
   const  peliculaTitulo = req.params.titulo;
   const dbPelicula = JSON.parse(fs.readFileSync('./BaseDeDatos/peliculas.json', 'utf-8'))

   const encontrarTitulo = dbPelicula.peliculas.find(titulo => titulo.title === peliculaTitulo )
   console.log(peliculaTitulo)
   if(encontrarTitulo){
       return res
       .status(200)
       .send(encontrarTitulo)
   }else{
       return res
       .status(400)
       .json({mensaje:"Titulo no encontrado"})
   }
}

module.exports= mostrarPeliculasTitulo