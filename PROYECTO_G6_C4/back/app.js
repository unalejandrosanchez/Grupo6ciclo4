var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


//Se exporta el archivo de bases de datos creado en carpeta config
var database = require("./config/database");

//Se exporta el archivo de auth que usa JWT
var auth = require('./auth/main_auth');


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

//cdiaz: se crea instancia de empleados.router
var empleadosRouter= require('./routes/empleados.router');

//cdiaz: se crea instancia de las rutas registradas en la carpeta /routes del proyecto
var empleadosRouter= require('./routes/empleados.router');
var usuariosRouter= require('./routes/usuarios.router');


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use(cors());

//MongoDB conexion
database.mongoConnect();


app.use('/usuarios',usuariosRouter); 


app.use(auth);

//Para que app usea las rutas
app.use('/empelados',empleadosRouter); 


//Para que app usea auth




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({ error: err.message })
});

module.exports = app;
