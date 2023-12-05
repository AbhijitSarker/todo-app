const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: [true, 'must provide name']
    },
    // completed: {
    //     type: Boolean,
    //     default: false,
    // },
});

module.exports = mongoose.model('ToDo', todoSchema);