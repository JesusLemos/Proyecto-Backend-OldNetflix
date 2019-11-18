var express = require('express');
var router = express.Router();

let verPeliculasID = require('../controladores/controladorPeliculasID')
let verPeliculasGenero = require('../controladores/controladorPeliculasGenero')
let entregarPeliculas = require('../controladores/controladorEntrega')


router.get('/mostrarid', verPeliculasID)

// Genero: Accion, Aventura, Animacion, Terror,Crimen,Fantasia, Ciencia Ficcion
router.get('/mostrargenero', verPeliculasGenero);
router.get('/entregarpelicula', entregarPeliculas)



module.exports= router;