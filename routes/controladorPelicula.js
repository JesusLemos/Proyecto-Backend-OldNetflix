var express = require('express');
var router = express.Router();

let verPeliculasID = require('../controladores/controladorPeliculasID')
let verPeliculasGenero = require('../controladores/controladorPeliculasGenero')


router.get('/mostrarid', verPeliculasID)

// Genero: Accion, Aventura, Animacion, Terror,Crimen,Fantasia, Ciencia Ficcion
router.get('/mostrargenero', verPeliculasGenero)



module.exports= router