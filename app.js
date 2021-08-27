const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use( require('./routers/index') );

mongoose.connect('mongodb://127.0.0.1:27017/Library',{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        .then( () => console.log('mongodb connection up'))
        .catch( error => console.log(`unable to connect to mongodb: ${error.message}`));

app.listen(process.env.PORT||3001, () => console.log('server started'));

