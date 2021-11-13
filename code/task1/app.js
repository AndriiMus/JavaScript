/* eslint-disable default-case */
const calc = expression => {
  const a = expression.split(' ');

  let res;
 
  switch (a[1]) {
    case '+':
      res = +a[0] + +a[2];
      break;

    case '-':
      res = a[0] - a[2];
      break;

    case '*':
      res = a[0] * a[2];
      break;

    case '/':
      res = a[0] / a[2];
      break;
  }
  return expression + ' = ' + res;
};
