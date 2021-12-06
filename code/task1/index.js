const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style ="color: ${color}; margin-left: 8px;">${text}<span>`;
};

const greenDiv = logTarget.bind(null, 'DIV', 'green');
const greenP = logTarget.bind(null, 'P', 'green');
const greenSpan = logTarget.bind(null, 'Span', 'green');

const grayDiv = logTarget.bind(null, 'DIV', 'gray');
const grayP = logTarget.bind(null, 'P', 'gray');
const graySpan = logTarget.bind(null, 'Span', 'gray');

divElem.addEventListener('click', greenDiv);
pElem.addEventListener('click', greenP);
spanElem.addEventListener('click', greenSpan);

divElem.addEventListener('click', grayDiv, true);
pElem.addEventListener('click', grayP, true);
spanElem.addEventListener('click', graySpan, true);
