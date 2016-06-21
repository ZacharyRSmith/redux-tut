import React from 'react';
import { connect } from 'react-redux';

import AddTodoList from './AddTodoList.jsx';
import TodoFooter from './TodoFooter.jsx';
import TodoListApp from './TodoListApp.jsx';

let TodoApp = ({ params, todoLists }) => {
  const filter = params.filter || 'all';

  return (
    <div>
      <h1>Todo Lists</h1>
      <AddTodoList />
      {( todoLists.length
        ? todoLists.map((l, i) => (
          <TodoListApp
            key={l.id}
            id={l.id}
            name={l.name}
            params={params}
            todos={l.todos}
          />
        ))
        : <div>No lists found!</div>
      )}
      <TodoFooter
        filter={filter}
      />
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
