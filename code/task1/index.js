const eventsListElem = document.querySelector('.events-list');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearButton = document.querySelector('.clear-btn');
const removeButton = document.querySelector('.remove-handlers-btn');
const attachButton = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style ="color: ${color}; margin-left: 8px;">${text}<span>`;
};

const greenDiv = logTarget.bind(null, 'DIV', 'green');
const greenP = logTarget.bind(null, 'P', 'green');
const greenSpan = logTarget.bind(null, 'Span', 'green');

const grayDiv = logTarget.bind(null, 'DIV', 'grey');
const grayP = logTarget.bind(null, 'P', 'grey');
const graySpan = logTarget.bind(null, 'Span', 'grey');

divElem.addEventListener('click', greenDiv);
pElem.addEventListener('click', greenP);
spanElem.addEventListener('click', greenSpan);

divElem.addEventListener('click', grayDiv, true);
pElem.addEventListener('click', grayP, true);
spanElem.addEventListener('click', graySpan, true);

clearButton.addEventListener('click', () => (eventsListElem.innerHTML = ''));

const removeHandlers = () => {
  divElem.removeEventListener('click', greenDiv);
  pElem.removeEventListener('click', greenP);
  spanElem.removeEventListener('click', greenSpan);

  divElem.removeEventListener('click', grayDiv, true);
  pElem.removeEventListener('click', grayP, true);
  spanElem.removeEventListener('click', graySpan, true);
};

const attachHandlers = () => {
  divElem.addEventListener('click', greenDiv);
  pElem.addEventListener('click', greenP);
  spanElem.addEventListener('click', greenSpan);

  divElem.addEventListener('click', grayDiv, true);
  pElem.addEventListener('click', grayP, true);
  spanElem.addEventListener('click', graySpan, true);
};

removeButton.addEventListener('click', removeHandlers);

attachButton.addEventListener('click', attachHandlers);

attachButton.addEventListener('DOMContentLoaded', attachHandlers);
