const password = document.querySelector('#password');
const button = document.querySelector('button');
const btnCopy = document.querySelector('#btnCopy');

let characters = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:"<>?|';
let passwordLength = 8;
let passwordValue = '';

const createPassword = () => {
  passwordValue = '';
  for (let i = 0; i < passwordLength; i++) {
    let number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.substring(number, number + 1);
  }

  password.value = passwordValue;
}

button.addEventListener('click', createPassword);

btnCopy.onclick = function () {
  password.select();
  document.execCommand("Copy");
};
