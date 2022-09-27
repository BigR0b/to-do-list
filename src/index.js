'use strict';
import './style.css';
import {
  todo,
  project,
  projectList,
  addToList,
  removeFromList,
  addProject,
  removeProject,
} from './todo';
import { createFrom, addToProject } from './ui';

const defaultProject = project('Default folder');
const project2 = project('Project 2');
addProject(defaultProject);
addProject(project2);
addToProject(projectList);

// let defaultTodo = todo('Default todo', 'Making a default todo list', '', '');

// const defaultProjectFolder = document.createElement('div');
// const body = document.querySelector('body');
// addToList(defaultTodo, projectList[0].todo);
// console.table(projectList);
// console.table(projectList[0]);
// console.table(projectList[0].todo);
// defaultProjectFolder.textContent = projectList[0].name;

// body.appendChild(defaultProjectFolder);
