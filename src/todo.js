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

export default todo;
export { todoList };
