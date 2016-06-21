import React from 'react';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import TodoFooter from './TodoFooter.jsx';

const TodoListApp = ({ name, params }) => {
  const filter = params.filter || 'all';

  return (
    <div>
      <h3>{name}</h3>
      <AddTodo />
      <TodoList
        filter={filter}
      />
      <TodoFooter
        filter={filter}
      />
    </div>
  );
};

export default TodoListApp;
