import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import TodoApp from './TodoApp.jsx';
import { configureStore } from '../store';

const store = configureStore();

const RootApp = () => (
  <div>
    <TodoApp />
  </div>
);

export default (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/(:filter)" component={RootApp} />
    </Router>
  </Provider>
);
