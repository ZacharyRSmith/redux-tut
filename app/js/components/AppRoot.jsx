import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

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
    <h1>habits</h1>
    <AddHabit />
    <HabitList />
  </div>
);

const TodoListApp = ({ params }) => {
  const filter = params.filter || 'all';

  return (
    <div>
      <AddTodo />
      <TodoList
        filter={filter}
      />
      <TodoFooter
        filter={filter}
      />
    </div>
  );
};

let TodoApp = ({ params, todoLists }) => {
  return (
    <div>
      <h1>Todo Lists</h1>

      {( todoLists.length
        ? todoLists.map(l =>
          <TodoListApp
            params={params}
          />
        )
        : <div>No lists found!</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoLists: state.todoLists
});

TodoApp = connect(
  mapStateToProps,
  null
)(TodoApp);


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
