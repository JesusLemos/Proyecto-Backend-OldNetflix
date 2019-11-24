var express = require('express');
var router = express.Router();

let verPeliculasID = require('../controladores/controladorPeliculasID')
let verPeliculasGenero = require('../controladores/controladorPeliculasGenero')
let entregarPeliculas = require('../controladores/controladorEntrega')
let verTodadPeliculas = require('../controladores/controladorTodasPeliculas')
let verPeliculasActor = require('../controladores/controladorPeliculasActores')
let verPeliculasTitulo = require('../controladores/controladorPeliculasTitulo')
let verPeliculasEstrenos = require('../controladores/controladorEstrenos')

router.get('/mostrartodo', verTodadPeliculas)

router.get('/mostrarid/:idpelicula', verPeliculasID)


// Genero: Accion, Aventura, Animacion, Terror,Crimen,Fantasia, Ciencia Ficcion
router.get('/mostrargenero/:genre', verPeliculasGenero);

router.get('/mostraractor/:actor', verPeliculasActor)

router.get('/mostrartitulo/:titulo', verPeliculasTitulo)

router.get('/mostrarestrenos/:estreno', verPeliculasEstrenos)


router.post('/entregarpelicula', entregarPeliculas)




module.exports= router;