const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    Firstname: { type: String, required: false},
    Lasttname: { type: String, required: false},
    Rol: { type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Rols'},
    email: {type: String, required: false}
   
});

module.exports = mongoose.model('Users', UsersSchema);