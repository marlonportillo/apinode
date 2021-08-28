const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use( require('./routers/index') );

mongoose.connect('mongodb+srv://user:AOvPPAfBRLrztiCI@cluster0.dayfv.mongodb.net/Library?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        .then( () => console.log('mongodb connection up'))
        .catch( error => console.log(`unable to connect to mongodb: ${error.message}`));

app.listen(process.env.PORT||3001, () => console.log('server started'));

