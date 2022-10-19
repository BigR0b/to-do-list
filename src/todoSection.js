'use strict';
import { selectedProjectIndex, selectedProject } from './projectSection';
import { addToList, projectList, todo } from './todo';
const todoFolder = document.querySelector('#todo');

const createFrom = () => {
  const todoForm = document.createElement('form');
  todoForm.setAttribute('id', 'todo-list-form');

  const formExit = document.createElement('button');
  formExit.setAttribute('type', 'button');
  formExit.setAttribute('id', 'exit-form');
  formExit.textContent = 'X';
  todoForm.appendChild(formExit);
  todoFolder.appendChild(todoForm);
  formExit.addEventListener('click', function () {
    removeForm();
    addFormBtn();
  });

  //form text input
  const formText = document.createElement('div');
  const textLabel = document.createElement('label');
  textLabel.setAttribute('for', 'description');
  textLabel.textContent = 'Description';
  const textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('id', 'description');
  textInput.required = true;
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
  todoForm.addEventListener('submit', function (e) {
    const isFormValid = todoForm.checkValidity();
    if (isFormValid) {
      e.preventDefault();
      removeForm();
      let task = textInput.value;
      let date = dateInput.value;
      let priority = selectInput.value;
      let newTodo = todo(task, date, priority);
      addToList(newTodo, projectList[selectedProjectIndex].todo);
      createTodo();
      addFormBtn();
    }
  });
};

//todo list
let index = 0;

const createTodo = () => {
  const allTodos = document.querySelectorAll('.todo-list');
  if (allTodos.length > 0) {
    index = allTodos.length;
  }
  const todoList = document.createElement('div');
  todoList.setAttribute('data-index', index);
  todoList.classList.add('todo-list');

  const todoText = document.createElement('div');
  todoText.textContent = selectedProject.todo[index].description;
  todoList.appendChild(todoText);

  const todoDate = document.createElement('div');
  todoDate.textContent = selectedProject.todo[index].dueDate;
  todoList.appendChild(todoDate);

  const todoPriority = document.createElement('div');
  todoPriority.textContent = selectedProject.todo[index].priority;
  todoList.appendChild(todoPriority);

  todoFolder.appendChild(todoList);
  index++;
};

const addFormBtn = () => {
  const createFormBtn = document.createElement('button');
  createFormBtn.setAttribute('type', 'button');
  createFormBtn.setAttribute('id', 'create-form');
  createFormBtn.textContent = 'Add Todo';
  todoFolder.appendChild(createFormBtn);
  createFormBtn.addEventListener('click', function () {
    createFrom();
    removeFormBtn();
  });
};

const removeFormBtn = () => {
  const formBtn = document.querySelector('#create-form');
  todoFolder.removeChild(formBtn);
};
const removeForm = () => {
  const todoFormModal = document.querySelector('#todo-list-form');
  todoFolder.removeChild(todoFormModal);
};

export { createFrom, addFormBtn, removeFormBtn, todoFolder };
