import { v4 } from 'node-uuid';

export const addHabit = (text) => ({
  type: 'ADD_HABIT',
  id: v4(),
  text
});

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
