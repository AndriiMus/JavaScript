export function getItemsList() {
  const elList = document.querySelectorAll('.technology');
  console.dir(elList);
  return elList;
}

export function getItemsArray() {
  const elList = [...document.querySelectorAll('.tool')];
  console.dir(elList);
  return elList;
}
