import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import AddTodoList from './AddTodoList.jsx';
import TodoFooter from './TodoFooter.jsx';
import TodoListApp from './TodoListApp.jsx';
import * as actions from '../actions';

class TodoApp extends Component {
  componentDidMount() {
    this.fetchData().then(action => {
      console.log('action:', action);
    });
  }

  fetchData() {
    return this.props.fetchTodoLists();
  }

  render() {
    const { filter, todoLists } = this.props;

    return (
      <div>
        <h1>Todo Lists</h1>
        <AddTodoList />
        {( todoLists.length
          ? todoLists.map((l, i) => (
            <TodoListApp
              filter={filter}
              key={l.id}
              id={l.id}
              name={l.name}
              todos={l.todos}
            />
          ))
          : <div>No lists found!</div>
        )}
        <TodoFooter filter={filter} />
      </div>
    );
  }
};

const mapStateToProps = (state, { params }) => ({
  todoLists: state.todoLists,
  filter: params.filter || 'all'
});
export default withRouter(connect(
  mapStateToProps,
  actions
)(TodoApp));
