import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

const Todo = ({
  onClick,
  completed,
  text
  }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
    className={
        completed ?
          'completed' :
          ''
    }
    >
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
  }) => (
  <ul>
    {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          />
    )}
  </ul>
);

class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos => {
      console.log(this.props.filter, todos);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter === prevProps.filter) return;

    fetchTodos(this.props.filter).then(todos => {
      console.log(this.props.filter, todos);
    });
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';

  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(VisibleTodoList));

export default VisibleTodoList;
