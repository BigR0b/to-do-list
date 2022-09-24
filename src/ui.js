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

//form select input
const formSelect = document.createElement('div');
const selectLabel = document.createElement('label');
selectLabel.setAttribute('for', 'priority');
selectLabel.textContent = 'Priority';
const selectInput = document.createElement('select');
selectInput.setAttribute('id', 'priority');
const lowPriority = document.createElement('option');
lowPriority.setAttribute('value', 'low');
lowPriority.textContent = 'Low';
const midPriority = document.createElement('option');
midPriority.setAttribute('value', 'medium');
midPriority.textContent = 'Medium';
const highPriority = document.createElement('option');
highPriority.setAttribute('value', 'high');
highPriority.textContent = 'High';
selectInput.appendChild(lowPriority);
selectInput.appendChild(midPriority);
selectInput.appendChild(highPriority);
formSelect.appendChild(selectLabel);
formSelect.appendChild(selectInput);
todoForm.appendChild(formSelect);

//form submit button
const formSubmit = document.createElement('button');
formSubmit.setAttribute('type', 'submit');
formSubmit.textContent = 'Select';
todoForm.appendChild(formSubmit);

todoFolder.appendChild(todoForm);

export {};
