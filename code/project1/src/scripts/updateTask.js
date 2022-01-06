import { renderTasks } from './render.js';
import { updateTask, getTasksList } from './tasksGateaway.js';

export const onToggleTask = e => {

  const taskId = e.target.dataset.id;
  const { text, createDate } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;
  const updatedTasks = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTasks)
    .then(() => getTasksList())
    .then(newTasksList => {
      renderTasks();
    });
};
