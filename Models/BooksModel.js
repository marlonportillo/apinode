const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    createdAt: {type: Date,required: true,default: Date.now},
    publishDate: {type: Date,required: true},
    Author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Authors'},
    Genre: {type: String, required: false},
    title: {type: String, required: true},
    User :{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Users'}

});

module.exports = mongoose.model('Books', BookSchema);