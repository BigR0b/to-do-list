'use strict';

const todoList = [];

const todo = (title, description, dueDate, priority) => {
  title = title;
  description = description;
  dueDate = dueDate;
  priority = priority;
  return { title, description, dueDate, priority };
};

const addToList = todo => todoList.push(todo);
const removeFromList = index => todoList.splice(index, 1);

const projectList = [];

const project = (name, todos) => {
  name = name;
  todos = todos;
  return { name, todos };
};

const addProject = project => projectList.push(project);
const removeProject = index => projectList.splice(index, 1);

export {
  todo,
  project,
  todoList,
  projectList,
  addToList,
  removeFromList,
  addProject,
  removeProject,
};
