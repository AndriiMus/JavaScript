export function setButton(text) {
  const body = document.querySelector('body');
  const newButton = document.createElement('button');
  newButton.textContent = text;
  body.append(newButton);
}

