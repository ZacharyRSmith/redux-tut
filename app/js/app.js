import React from 'react';
import { render } from 'react-dom';

import AppRoot from './components/AppRoot.jsx';
import { fetchTodos } from './api';
import { configureStore } from './store';

fetchTodos('all').then(todos => console.log(todos));

const store = configureStore();

render(
  <AppRoot store={store} />,
  document.getElementById('app-root')
);
