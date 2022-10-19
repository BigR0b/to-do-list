import { projectList, removeProject, addProject } from './todo';
let index = 0;

const projectsList = document.querySelector('#projects-list');

const removeButtons = () => {
  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.firstChild);
  }
  index = 0;
};

const addProjectBtns = projects => {
  projects.forEach(project => {
    const projectBtns = document.createElement('div');
    projectBtns.classList.add('project-buttons');
    projectBtns.setAttribute('data-index', index);
    const projectItem = document.createElement('button');
    projectItem.classList.add('select-project');
    projectItem.textContent = project.name;
    const removeProjectBtn = document.createElement('button');
    removeProjectBtn.classList.add('remove-project');
    removeProjectBtn.textContent = 'X';
    projectBtns.appendChild(projectItem);
    projectBtns.appendChild(removeProjectBtn);
    projectsList.appendChild(projectBtns);
    index++;
  });
};

const removeProjectItem = () => {
  const removeBtns = document.querySelectorAll('.remove-project');
  removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', function () {
      removeProject(removeBtn.parentElement.getAttribute('data-index'));
      addToProjectUI(projectList);
    });
  });
};

let selectedProjectIndex = 0;
let selectedProject;
const selectProject = () => {
  const selectBtns = document.querySelectorAll('.select-project');
  selectBtns.forEach(selectBtn => {
    selectBtn.addEventListener('click', function () {
      selectedProjectIndex = selectBtn.parentElement.getAttribute('data-index');
      selectedProject = projectList[selectedProjectIndex];
      console.log(selectedProject);
    });
  });
};

const addToProjectUI = projects => {
  removeButtons();
  addProjectBtns(projects);
  removeProjectItem();
  selectProject();
};
console.log(selectedProject);
export { addToProjectUI, selectedProjectIndex, selectedProject };
