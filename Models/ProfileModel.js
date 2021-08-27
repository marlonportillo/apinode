const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    
    Book:  { type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Books'},
    Usuario: { type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'},
    
   
});

module.exports = mongoose.model('Profile', UsersSchema);