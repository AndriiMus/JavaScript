const baseUrl = 'https://61d2e19ab4c10c001712b65a.mockapi.io/todolist/users';
const emailField = document.querySelector('#email');
const userNameField = document.querySelector('#name');
const passwordField = document.querySelector('#password');
const submitButton = document.querySelector('.submit-button');
const formElement = document.querySelector('.login-form');
const isValidForm = () => {
  if (formElement.reportValidity()) {
    submitButton.disabled = false;
  }
};

const sendData = formData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  });

const submitData = event => {
  event.preventDefault();
  const formData = [...new FormData(formElement)].reduce(
    (acc, [prop, value]) => ({ ...acc, [prop]: value }),
    {},
  );
  sendData(formData)
    .then(response => response.json())
    .then(userData => {
      alert(JSON.stringify(userData));
      formElement.reset();
      submitButton.disabled = true;
    });
};

formElement.addEventListener('submit', submitData);
formElement.addEventListener('input', isValidForm);
