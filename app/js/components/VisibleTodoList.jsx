import { connect } from 'react-redux';

import TodoList from './TodoList.jsx';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers/todoLists';

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
)(TodoList);
