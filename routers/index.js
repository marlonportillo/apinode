const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

app.use( '/', require('./Book') );

app.use( '/', require('./Authors') );

app.use( '/', require('./Rols') );

app.use( '/', require('./Stock') );

app.use( '/', require('./Users') );

app.use( '/', require('./Profile') );

module.exports = app;