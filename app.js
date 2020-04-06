var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cron = require('node-cron');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { product } = require('./repository/products')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
    res.render('error');
});
const port = 9000
app.listen(port, () => {
    console.log(`¡Aplicación escuchando en el puerto ${port}!`)
    console.log("rasping");
    cron.schedule('15 */10 * * *', () => {
        console.log('Runing a job at 01:00 at America/Sao_Paulo timezone');
    }, {
        scheduled: true,
        timezone: "America/Bogota"
    });
})
module.exports = app;