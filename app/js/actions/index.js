import { v4 } from 'node-uuid';
import * as api from '../api';

export const addTodo = (text, listId) => ({
  type: 'ADD_TODO',
  id: v4(),
  listId,
  text,
});

export const addTodoList = (name) => ({
  type: 'ADD_TODO_LIST',
  id: v4(),
  name,
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
});

export const fetchTodos = (listId, filter) =>
  api.fetchTodos(listId, filter).then(response =>
    receiveTodos(filter, response)
  );

export const toggleTodo = (id, listId) => ({
  type: 'TOGGLE_TODO',
  id,
  listId,
});
