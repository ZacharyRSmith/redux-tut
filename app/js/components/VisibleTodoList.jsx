import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList.jsx';
import * as actions from '../actions';
import { getVisibleTodos } from '../reducers/todoLists';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    // !! make sure to destructure
    // because by the time fetchTodos resolves, this.props.filter might have changed
    const { filter, fetchTodos } = this.props;

    fetchTodos('list1Id', filter);
  }

  render() {
    const { toggleTodo, ...rest } = this.props;

    return (
      <TodoList
        {...rest}
        onTodoClick={toggleTodo}
      />
    );
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
VisibleTodoList = connect(
  mapStateToProps,
  actions
)(VisibleTodoList);

export default VisibleTodoList;
