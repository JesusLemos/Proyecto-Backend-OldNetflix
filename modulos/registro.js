const mongoose = require('mongoose');


const usuario = mongoose.Schema({
    nombre:{
        type: String,
        required:true,
        
    },
    apellido:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    token:{
        type:String,
        require:true

    }


    
})

const registroUsuario = mongoose.model('usuarios', usuario);

module.exports=registroUsuario;