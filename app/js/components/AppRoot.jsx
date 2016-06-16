import { Provider } from 'react-redux';
import React from 'react';
import throttle from 'lodash/throttle';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';
import { saveState } from '../store/localStorage';
import store from '../store';


const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

store.subscribe(throttle(() => {
  saveState({ todos: store.getState().todos });
}, 1000));

export default (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);
