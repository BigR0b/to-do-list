const projectsList = document.querySelector('#projects-list');

const addToProject = projects => {
  projects.forEach(project => {
    const projectList = document.createElement('div');
    projectList.textContent = project.name;
    projectsList.appendChild(projectList);
  });
};

export { addToProject };
