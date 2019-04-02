var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }, 
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('contact',contactSchema)