'use strict';

const projectList = [];

const project = name => {
  name = name;
  const todo = [];
  return { name, todo };
};

const addProject = project => projectList.push(project);
const removeProject = index => projectList.splice(index, 1);

const todo = (description, dueDate, priority) => {
  description = description;
  dueDate = dueDate;
  priority = priority;
  return { description, dueDate, priority };
};

const addToList = (todo, todoList) => todoList.push(todo);
const removeFromList = (index, todoList) => todoList.splice(index, 1);

export {
  todo,
  project,
  projectList,
  addToList,
  removeFromList,
  addProject,
  removeProject,
};
