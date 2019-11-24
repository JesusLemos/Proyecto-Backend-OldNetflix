var express = require('express');
var router = express.Router();

let registroUsuario = require('../controladores/controladorRegistro')
let loginUsuario = require('../controladores/controladorLogin')
let desconectarUsuario = require('../controladores/controladorDesconectar')
let mostrarPerfiles = require('../controladores/controladorPerfiles')
    

router.post('/registro', registroUsuario)
router.post('/login', loginUsuario)
router.post('/desconectar', desconectarUsuario)
router.get('/perfil/:token/:usuario', mostrarPerfiles)


module.exports = router