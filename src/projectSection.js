const projectsList = document.querySelector('#projects-list');

function findIndex() {
  for (let i = 0; i < projectsList.children.length; i++) {
    projectsList.children[i].addEventListener('click', function () {
      console.log(i);
    });
  }
}
const addToProject = projects => {
  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.textContent = project.name;
    projectsList.appendChild(projectItem);
  });
};

export { addToProject, findIndex };
