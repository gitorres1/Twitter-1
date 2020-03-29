var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//import toures
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.route');


//import DBmanager
const dbManager = require("./database/db.manager")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
/*

dbManager.sequelizeConnection.authenticate() .then(
()=>{
    console.log("connection DB");
    dbManager.sequelizeConnection.sinc() .then(
()=> {

    console.log ("database sync");
}
    );
}
).catch (
    error => {
        console.log("error de conexion a la base de datos");
    }
);
module.exports = app;

*/





dbManager.sequelizeConnection.authenticate()  .then(() => {
    console.log("connection DB");
    dbManager.sequelizeConnection.sync().then(() => {

        console.log("Database Synced");
});
}
).catch (err => {
        console.error('error de conexion a la base de datos:', err);
    }
);
module.exports = app;

