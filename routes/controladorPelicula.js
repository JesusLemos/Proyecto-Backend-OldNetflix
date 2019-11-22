var express = require('express');
var router = express.Router();

let verPeliculasID = require('../controladores/controladorPeliculasID')
let verPeliculasGenero = require('../controladores/controladorPeliculasGenero')
let entregarPeliculas = require('../controladores/controladorEntrega')
let verTodadPeliculas = require('../controladores/controladorTodasPeliculas')


router.get('/mostrartodo', verTodadPeliculas)
router.get('/mostrarid/:idpelicula', verPeliculasID)


// Genero: Accion, Aventura, Animacion, Terror,Crimen,Fantasia, Ciencia Ficcion
router.get('/mostrargenero/:genre', verPeliculasGenero);

router.post('/entregarpelicula', entregarPeliculas)



module.exports= router;