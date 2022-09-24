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

todoFolder.appendChild(todoForm);
//form date input

export {};
