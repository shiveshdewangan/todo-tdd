const TodoModel = require("../model/todo.model");

exports.createTodo = (req, res, next) => {
    TodoModel.create(req.body);
}

exports.add = (x, y) => x + y;
