import { v4 } from 'node-uuid';

import * as api from '../api';

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
});

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(res =>
    receiveTodos(filter, res)
  );

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
