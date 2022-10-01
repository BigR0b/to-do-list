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
import {
  createFrom,
  addFormBtn,
  removeFormBtn,
  todoFolder,
} from './todoSection';
import { addToProject, findIndex } from './projectSection';

const newProjectBtn = document.querySelector('#projectBtn');
newProjectBtn.addEventListener('click', function (e) {
  const isFormValid = document.querySelector('#new-project').checkValidity();
  if (isFormValid) {
    e.preventDefault();
    let projectName = document.querySelector('#project-name');
    console.log('test');
    let createProject = project(projectName.value);
    addProject(createProject);
    addToProject(projectList);
    projectName.value = '';
    findIndex();

    console.log(projectList);
  }
});

const defaultProject = project('Default folder');
const project2 = project('Project 2');
// addProject(defaultProject);
// addProject(project2);
// addToProject(projectList);
addFormBtn();

// let defaultTodo = todo('Default todo', 'Making a default todo list', '', '');

// const defaultProjectFolder = document.createElement('div');
// const body = document.querySelector('body');
// addToList(defaultTodo, projectList[0].todo);
// console.table(projectList);
// console.table(projectList[0]);
// console.table(projectList[0].todo);
// defaultProjectFolder.textContent = projectList[0].name;

// body.appendChild(defaultProjectFolder);
