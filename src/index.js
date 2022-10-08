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
import { addToProjectUI } from './projectSection';

const newProjectBtn = document.querySelector('#projectBtn');
newProjectBtn.addEventListener('click', function (e) {
  const isFormValid = document.querySelector('#new-project').checkValidity();
  if (isFormValid) {
    e.preventDefault();
    let projectName = document.querySelector('#project-name');
    let createProject = project(projectName.value);

    addProject(createProject);
    addToProjectUI(projectList);
    projectName.value = '';
  }
});

let defaultProject = project('Default');
addProject(defaultProject);
addToProjectUI(projectList);
addFormBtn();
