import React from 'react';
import { render } from 'react-dom';

import AppRoot from './components/AppRoot.jsx';
import { configureStore } from './store';

const store = configureStore();

render(
  <AppRoot store={store} />,
  document.getElementById('app-root')
);
