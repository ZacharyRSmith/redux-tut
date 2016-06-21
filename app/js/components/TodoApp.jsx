import React from 'react';
import { connect } from 'react-redux';

import AddTodoList from './AddTodoList.jsx';
import TodoListApp from './TodoListApp.jsx';

let TodoApp = ({ params, todoLists }) => {
  return (
    <div>
      <h1>Todo Lists</h1>
      <AddTodoList />
      {( todoLists.length
        ? todoLists.map((l, i) =>
          <TodoListApp
            key={i}
            name={l.name}
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
