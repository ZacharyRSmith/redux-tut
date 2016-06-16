import { Provider } from 'react-redux';
import React from 'react';

import { configureStore } from '../store';
import { TodoApp } from './TodoApp.jsx';

const Root = ({ store }) => (
  <Provider store={configureStore()}>
    <TodoApp />
  </Provider>
);

export default Root;
