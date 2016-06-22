import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList.jsx';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers/todoLists';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos('list1Id', this.props.filter).then(todos => {
      console.log(this.props.filter, todos);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter === prevProps.filter) return;

    fetchTodos('list1Id', this.props.filter).then(todos => {
      console.log(this.props.filter, todos);
    });
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (
  state,
  ownProps
) => ({
  todos: getVisibleTodos(
    ownProps,
    ownProps.filter
  )
});
export default connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(VisibleTodoList);
