import React from 'react';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';

const TodoApp = ({ params }) => (
  <div>
    <AddTodo />
    <TodoList filter={params.filter || 'all'} />
    <Footer />
  </div>
);

export { TodoApp };
