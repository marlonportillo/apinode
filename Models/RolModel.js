const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RolSchema = new Schema({
    Rol: { type: String,  required: false},
   
});

module.exports = mongoose.model('Rols', RolSchema);