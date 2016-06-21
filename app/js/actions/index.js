import { v4 } from 'node-uuid';

export const addHabit = (text) => ({
  type: 'ADD_HABIT',
  id: v4(),
  text
});

export const addTodo = (text, listId) => ({
  type: 'ADD_TODO',
  id: v4(),
  listId,
  text
});

export const addTodoList = (name) => ({
  type: 'ADD_TODO_LIST',
  id: v4(),
  name
});

export const toggleTodo = (id, listId) => ({
  type: 'TOGGLE_TODO',
  id,
  listId
});
