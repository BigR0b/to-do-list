'use strict';

if (localStorage.getItem('projectList') == null) {
  localStorage.setItem('projectList', '[]');
}
const projectList = JSON.parse(localStorage.getItem('projectList'));
const project = name => {
  name = name;
  const todo = [];
  return { name, todo };
};

const addToStorage = () => {
  localStorage.setItem('projectList', JSON.stringify(projectList));
};

const addProject = project => {
  projectList.push(project);
  addToStorage();
};
const removeProject = index => {
  projectList.splice(index, 1);
  addToStorage();
};

const todo = (description, dueDate, priority) => {
  description = description;
  dueDate = dueDate;
  priority = priority;
  return { description, dueDate, priority };
};

const addToList = (todo, todoList) => {
  todoList.push(todo);
  addToStorage();
};
const removeFromList = (index, todoList) => {
  todoList.splice(index, 1);
  addToStorage();
};

export {
  todo,
  project,
  projectList,
  addToList,
  removeFromList,
  addProject,
  removeProject,
  addToStorage,
};
