import { v4 } from 'node-uuid';

import { getIsFetching } from '../reducers';
import * as api from '../api';

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) return Promise.resolve();

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter,
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response,
      });
    },
    // do not use .catch so that only api.fetchTodos() errs are displayed to user
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.'
      });
    }
  );
};

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
