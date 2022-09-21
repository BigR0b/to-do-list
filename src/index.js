'use strict';
import {
  todo,
  project,
  todoList,
  projectList,
  addToList,
  removeFromList,
  addProject,
  removeProject,
} from './todo';

addToList(todo('Test', 'Testing', '', ''));
addToList(todo('test2', 'testing 2', '', ''));
console.log(todoList[1]);
