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

//!!!! CREATE A FORM FOR PROJECTS TO CREATE A NEW PROJECT
const createProjectFrom = () => {
  const projectForm = document.createElement('form');
  projectForm.setAttribute('id', 'project-list-form');

  //form text input
  const projectText = document.createElement('div');
  const textLabel = document.createElement('label');
  textLabel.setAttribute('for', 'form-title');
  textLabel.textContent = 'Description';
  const textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('id', 'form-title');
  textInput.required = true;

  const newProjectBtn = document.createElement('button');
  newProjectBtn.setAttribute('type', 'submit');
  newProjectBtn.textContent = 'Select';
  project.appendChild(newProjectBtn);
  newProjectBtn.addEventListener('click', function (e) {
    const isFormValid = projectForm.checkValidity();
    if (isFormValid) {
      e.preventDefault();
      addFormBtn();
      removeForm();
      let task = textInput.value;
    }
  });
};
export { addToProject, findIndex };
