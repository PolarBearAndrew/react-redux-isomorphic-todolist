var todoList = require('../api/todoList');

export default {

    getAllTodo: function() {
        return todoList.getTodo();
    }
};
