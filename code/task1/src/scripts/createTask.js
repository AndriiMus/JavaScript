import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const intTask = document.querySelector('.task-input');
  const text = intTask.value;
  if (text === '') {
    return;
  }
  intTask.value = '';
  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};
