import React from 'react';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import TodoFooter from './TodoFooter.jsx';

const TodoListApp = ({ id, name, params, todos }) => {
  const filter = params.filter || 'all';

  return (
    <div>
      <h3>{name}</h3>
      <AddTodo
        listId={id}
      />
      <TodoList
        filter={filter}
        todos={todos}
      />
      <TodoFooter
        filter={filter}
      />
    </div>
  );
};

export default TodoListApp;
