var express = require('express');
var router = express.Router();

let registroUsuario = require('../controladores/controladorRegistro')
let loginUsuario = require('../controladores/controladorLogin')
let desconectarUsuario = require('../controladores/controladorDesconectar')
let mostrarPerfiles = require('../controladores/controladorPerfiles')


router.post('/registro', registroUsuario)
router.get('/login', loginUsuario)
router.get('/desconectar', desconectarUsuario)
router.get('/perfil', mostrarPerfiles)


module.exports = router