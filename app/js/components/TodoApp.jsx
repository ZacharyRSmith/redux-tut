import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './AddTodo.jsx';
import AddTodoList from './AddTodoList.jsx';
import TodoList from './TodoList.jsx';
import TodoFooter from './TodoFooter.jsx';

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
      <AddTodoList />
      {( todoLists.length
        ? todoLists.map((l, i) =>
          <TodoListApp
            key={i}
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

export default connect(
  mapStateToProps,
  null
)(TodoApp);
