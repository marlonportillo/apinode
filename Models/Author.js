const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    Author: {type: String,  required: false}
   
});

module.exports = mongoose.model('Authors', AuthorSchema);