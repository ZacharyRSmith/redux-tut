import React from 'react';

import Todo from './Todo.jsx';

const TodoList = ({
  todos,
  onTodoClick
}) => {
  console.log('todos', todos)
  todos = todos.all.map(id => todos.byId[id]);

  return ( todos.length
    ? <ul>
        {todos.map(todo =>
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo.id, todo.listId)}
              />
        )}
      </ul>
    : <ul></ul>
  );
};

export default TodoList;
