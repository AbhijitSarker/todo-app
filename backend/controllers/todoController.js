const todoModel = require('../models/todoModel');

module.exports.getTodo = async (req, res) => {
    const todo = await todoModel.find();
    res.send(todo);
}

module.exports.saveTodo = async (req, res) => {
    const { text } = req.body;

    todoModel.create({ text })
        .then((data) => {
            console.log('Added Successfully');
            console.log(data);
            res.send(data);
        })
}