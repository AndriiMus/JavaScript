import { fetchRepositories, fetchUserData } from './gateways.js';
import { renderUserData } from './user.js';
import { cleanReposList, renderRepos } from './repos.js';
import { hiddenSpinner, showSpinner } from './spiner.js';

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserData(defaultUser);

const onSearchUser = async () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hiddenSpinner();
  }
};

showUserBtnElem.addEventListener('click', onSearchUser);
