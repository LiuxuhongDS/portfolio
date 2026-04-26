import { fetchJSON, renderProjects } from '../global.js';

const projects = await fetchJSON('../lib/projects.json');
const projectsContainer = document.querySelector('.projects');
renderProjects(projects, projectsContainer, 'h2');

// Step 1.6: 显示项目计数
const heading = document.querySelector('.projects-title');
heading.textContent = `${projects.length} Projects`;