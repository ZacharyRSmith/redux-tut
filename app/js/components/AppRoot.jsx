import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

// habits
import AddHabit from './AddHabit.jsx';
import HabitList from './HabitList.jsx';
// todos
import TodoApp from './TodoApp.jsx';

import { configureStore } from '../store';

const store = configureStore();

const HabitApp = () => (
  <div>
    <h1>habits</h1>
    <AddHabit />
    <HabitList />
  </div>
);

const RootApp = ({ params }) => (
  <div>
    <TodoApp
      params={params}
    />
    <HabitApp />
  </div>
);

export default (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/(:filter)" component={RootApp} />
    </Router>
  </Provider>
);
