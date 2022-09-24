'use strict';
const projectsFolder = document.querySelector('#project');
const todoFolder = document.querySelector('#todo');

const todoForm = document.createElement('form');
todoForm.setAttribute('id', 'todo-list-form');

//form text input
const formText = document.createElement('div');
const textLabel = document.createElement('label');
textLabel.setAttribute('for', 'description');
textLabel.textContent = 'Description';
const textInput = document.createElement('input');
textInput.setAttribute('type', 'text');
textInput.setAttribute('id', 'description');
formText.appendChild(textLabel);
formText.appendChild(textInput);
todoForm.appendChild(formText);

//form date input
const formDate = document.createElement('div');
const dateLabel = document.createElement('label');
dateLabel.setAttribute('for', 'date');
dateLabel.textContent = 'Date';
const dateInput = document.createElement('input');
dateInput.setAttribute('type', 'date');
dateInput.setAttribute('id', 'date');
formDate.appendChild(dateLabel);
formDate.appendChild(dateInput);
todoForm.appendChild(formDate);
todoFolder.appendChild(todoForm);

//form priority input
const formPriority = document.createElement('div');
const priorityLabel = document.createElement('label');

export {};
