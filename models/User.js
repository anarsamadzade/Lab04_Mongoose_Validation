const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [4, 'Username must be at least 4 characters long'],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Please enter a valid email address'],
    },
    city: {
        type: String,
        required: true,
        match: [/^[a-zA-Z\s]*$/, 'City should contain only alphabets and spaces'],
    },
    website: {
        type: String,
        required: true,
        validate: [validator.isURL, 'Please enter a valid URL (http:// or https://)'],
    },
    zipcode: {
        type: String,
        required: true,
        match: [/^\d{5}-\d{4}$/, 'Zipcode must be in the format 12345-1234'],
    },
    phone: {
        type: String,
        required: true,
        match: [/^1-\d{3}-\d{3}-\d{4}$/, 'Phone must be in the format 1-123-123-1234'],
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
