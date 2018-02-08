const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    local: {
        user : String,
        date : { type: Date, default: Date.now },
        latitud: String,
        longitud: String
    }
});

module.exports = mongoose.model('Location', userSchema);