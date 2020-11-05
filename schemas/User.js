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
        required: true,
        default: ''
    },
    phone: {
        type: String,
        required: true,
        default: ''
    },
    address: {
        type: String,
        required: true,
        default: ''
    }
    
});


module.exports = mongoose.model('user', UserSchema);