import { Provider } from 'react-redux';
import React from 'react';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';
import { configureStore } from '../store';


const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default (
  <Provider store={configureStore()}>
    <TodoApp />
  </Provider>
);
