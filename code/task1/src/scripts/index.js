import { renderTasks } from './render.js';
import { initTodoListHandLers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandLers();
});

const onStarageChange = e => {
  if (e.key === 'tasksList') {
    return;
  }

  renderTasks();
};

window.addEventListener('storage', onStarageChange);
