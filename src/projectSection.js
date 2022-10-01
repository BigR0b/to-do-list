const projectsList = document.querySelector('#projects-list');
const project = document.querySelector('#project');
const findIndex = () => {
  for (let i = 0; i < projectsList.children.length; i++) {
    projectsList.children[i].addEventListener('click', function () {
      console.log(i);
    });
  }
};
const addToProject = projects => {
  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.textContent = project.name;
    projectsList.appendChild(projectItem);
  });
};

const newProjectBtn = document.querySelector('#projectBtn');
newProjectBtn.addEventListener('click', function (e) {
  const isFormValid = document.querySelector('#new-project').checkValidity();
  if (isFormValid) {
    e.preventDefault();

    let projectName = document.querySelector('#project-name');
    projectName.value = '';
  }
});
export { addToProject, findIndex };
