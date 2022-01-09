import { fetchRepositories, fetchUserData } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos } from './repos.js';
import { hiddenSpinner, showSpinner } from './spiner.js';

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
const listElem = document.querySelector('.repo-list');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserData(defaultUser);

const onSearchUser = () => {
  showSpinner();
  listElem.innerHTML = '';
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
      renderRepos(reposList);
      hiddenSpinner();
    })
    .catch(err => {
      hiddenSpinner();
      alert(err.message);
    });
};

showUserBtnElem.addEventListener('click', onSearchUser);
