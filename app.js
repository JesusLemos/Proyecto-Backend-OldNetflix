var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
let controladorUsuario = require('./routes/controladorUsuario')
let controladorPeliculas = require('./routes/controladorPelicula')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/usuario', usersRouter);
app.use('/usuario', controladorUsuario);
app.use('/peliculas', controladorPeliculas);

module.exports = app;
