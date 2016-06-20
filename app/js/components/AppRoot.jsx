import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

// habits
import AddHabit from './AddHabit.jsx';
import HabitList from './HabitList.jsx';
// todos
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import TodoFooter from './TodoFooter.jsx';

import { configureStore } from '../store';

const store = configureStore();

const HabitApp = () => (
  <div>
    <h1>habit</h1>
    <AddHabit />
    <HabitList />
  </div>
);

const TodoApp = ({ params }) => {
  const filter = params.filter || 'all';

  return (
    <div>
      <h1>todo</h1>
      <AddTodo />
      <TodoList
        filter={filter}
      />
      <TodoFooter
        filter={filter}
      />
    </div>
  );
}

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
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={RootApp} />
    </Router>
  </Provider>
);
