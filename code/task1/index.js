export function getTitleElement() {
  const titleElem = document.querySelector('title');
  console.dir(titleElem);
  return titleElem;
}

export function getInputElement(text) {
  const inputElem = document.querySelector(text);
  console.dir(inputElem);
  return inputElem;
}
