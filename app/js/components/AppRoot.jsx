import React from 'react';
import { Provider } from 'react-redux';

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

const TodoApp = () => (
  <div>
    <h1>todo</h1>
    <AddTodo />
    <TodoList />
    <TodoFooter />
  </div>
);

const RootApp = () => (
  <div>
    <TodoApp />
    <HabitApp />
  </div>
);

export default (
  <Provider store={store}>
    <RootApp />
  </Provider>
);
