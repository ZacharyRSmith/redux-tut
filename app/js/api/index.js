import { v4 } from 'node-uuid';

const list1Id = 'list1Id';
const list2Id = 'list2Id';

const todo1Id = v4();
const todo2Id = v4();
const todo3Id = v4();

let todo1 = {
  id: todo1Id,
  listId: list1Id,
  text: 'a',
  completed: false,
};
let todo2 = {
  id: todo2Id,
  listId: list1Id,
  text: 'b',
  completed: true,
};
let todo3 = {
  id: todo3Id,
  listId: list2Id,
  text: 'c',
  completed: false,
};

const db = {
  todoLists: [{
    id: list1Id,
    name: 'list 1',
    todos: {
      allIds: [todo1Id, todo2Id],
      byId: {
        [todo1Id]: todo1,
        [todo2Id]: todo2,
      },
    },
  }, {
    id: list2Id,
    name: 'list 2',
    todos: {
      allIds: [todo3Id],
      byId: {
        [todo3Id]: todo3,
      },
    },
  }],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (listId, filter) =>
  delay(500).then(() => {
    const list = db.todoLists.find(l => l.id === listId);

    switch (filter) {
      case 'all':
        return list.todos;
      case 'active':
        return list.todos.filter(t => !t.completed);
      case 'completed':
        return list.todos.filter(t => t.completed);
      default:
        throw new Error(`Filter not recognized: ${filter}`);
    }
  });
