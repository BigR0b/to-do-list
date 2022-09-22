'use strict';
import {
  todo,
  project,
  projectList,
  addToList,
  removeFromList,
  addProject,
  removeProject,
} from './todo';

const defaultProject = project('Default folder');
addProject(defaultProject);

let defaultTodo = todo('Default todo', 'Making a default todo list', '', '');

const defaultProjectFolder = document.createElement('div');
const body = document.querySelector('body');
addToList(defaultTodo, projectList[0].todo);
console.table(projectList);
console.table(projectList[0]);
console.table(projectList[0].todo);
defaultProjectFolder.textContent = projectList[0].name;

body.appendChild(defaultProjectFolder);
