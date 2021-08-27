const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StockSchema = new Schema({
    Book: { type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Books'},
    Quantity:{type: Number,  required: false}
});

module.exports = mongoose.model('Stock', StockSchema);