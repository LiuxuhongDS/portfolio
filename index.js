import { fetchJSON, renderProjects } from './global.js';

const projects = await fetchJSON('./lib/projects.json');
const projectsContainer = document.querySelector('.projects');
renderProjects(projects.slice(0, 3), projectsContainer, 'h2');
const githubData = await fetchJSON('https://api.github.com/users/LiuxuhongDS');

const profileStats = document.querySelector('#profile-stats');
profileStats.innerHTML = `
  <dl>
    <dt>Public Repos</dt><dd>${githubData.public_repos}</dd>
    <dt>Followers</dt>  <dd>${githubData.followers}</dd>
    <dt>Following</dt>  <dd>${githubData.following}</dd>
  </dl>
`;