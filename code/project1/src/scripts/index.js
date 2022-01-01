import { renderTasks } from './render.js';
import { initTodoListHandLers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandLers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
