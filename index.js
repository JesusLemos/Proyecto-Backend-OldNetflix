

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BackendNextflix',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log('Conectado a mongodb'))
    .catch(err => console.error(err))