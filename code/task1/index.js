const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const btnCreate = document.querySelector('.create-task-btn');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      checkbox.dataset.id = index;
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const pushNewTask = () => {
  const intTask = document.querySelector('.task-input');
  if (intTask.value === '') {
    return;
  }
  tasks.unshift({ text: intTask.value, done: false });
  listElem.innerHTML = '';
  intTask.value = '';
  renderTasks(tasks);
};

btnCreate.addEventListener('click', pushNewTask);
