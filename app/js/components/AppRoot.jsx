import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import { configureStore } from '../store';
import { TodoApp } from './TodoApp.jsx';

const Root = ({ store }) => (
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path='/' component={TodoApp} />
    </Router>
  </Provider>
);

export default Root;
