import { renderTasks } from './render.js';
import { setItem } from './storage.js';
import { getTasksList } from './tasksGateaway.js';
import { initTodoListHandLers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(taskList => {
    setItem('tasksList', taskList);
    renderTasks();
  });

  initTodoListHandLers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
