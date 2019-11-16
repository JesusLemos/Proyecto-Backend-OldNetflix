let express = require('express');
let router = express.Router();
let registro = require('../controladores/controladorRegistro')

router.post("/registro", registro)

module.exports = router