const fs = require('fs');

const mostrarTodo = (req, res) => {
    const dbPeliculas = JSON.parse(fs.readFileSync('./BaseDeDatos/peliculas.json', 'utf-8'))

  
        res
            .status(200)
            .send(dbPeliculas)
        
  

}

module.exports = mostrarTodo