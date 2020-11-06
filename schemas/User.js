const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        default: ''
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    firstName: {
        type: String,
        required: true,
        default: ''
    },
    lastName: {
        type: String,
        required: true,
        default: ''
    },
    age: {
        type: String,
        required: false,
        default: ''
    },
    phone: {
        type: String,
        required: false,
        default: ''
    },
    address: {
        type: String,
        required: false,
        default: ''
    }
    
});


module.exports = mongoose.model('user', UserSchema);