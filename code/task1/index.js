const eventsListElem = document.querySelector('.events-list');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearButton = document.querySelector('.clear-btn');
const removeButton = document.querySelector('.remove-handlers-btn');
const attachButton = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style = "color: ${color}; margin-left: 8px;">${text}<span>`;
};
const clearBoard = () => {
  eventsListElem.innerHTML = '';
};

const greenDiv = logTarget.bind(null, 'div', 'green');
const greenP = logTarget.bind(null, 'p', 'green');
const greenSpan = logTarget.bind(null, 'span', 'green');

const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const greyP = logTarget.bind(null, 'p', 'grey');
const greySpan = logTarget.bind(null, 'span', 'grey');

clearButton.addEventListener('click', clearBoard);

const removeHandlers = () => {
  divElem.removeEventListener('click', greenDiv);
  pElem.removeEventListener('click', greenP);
  spanElem.removeEventListener('click', greenSpan);

  divElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', greyP, true);
  spanElem.removeEventListener('click', greySpan, true);
};

const attachHandlers = () => {
  divElem.addEventListener('click', greenDiv);
  pElem.addEventListener('click', greenP);
  spanElem.addEventListener('click', greenSpan);

  divElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', greyP, true);
  spanElem.addEventListener('click', greySpan, true);
};

removeButton.addEventListener('click', removeHandlers);

attachButton.addEventListener('click', attachHandlers);

document.addEventListener('DOMContentLoaded', () => {
  attachHandlers();
});
