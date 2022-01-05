import { getItem, setItem } from './storage.js';

const ListElem = document.querySelector('.list');

const createCheckBox = ({ done, id }) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-id', id);
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');

  return checkbox;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckBox({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];

  ListElem.innerHTML = '';
  const tasksElems = tasksList.sort((a, b) => a.done - b.done).map(createListItem);
  ListElem.append(...tasksElems);
};
