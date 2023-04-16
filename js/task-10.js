function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsBox = document.getElementById('controls');
const inputNumb = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const mainBox = document.querySelector('#boxes');

let inputValue = 0;
let size = 30;
const fragment = document.createDocumentFragment();

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(inputValue) {
  inputValue = inputNumb.value;
  for (let i = 1; i <= inputValue; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.background = getRandomHexColor();
    size += 10;
    fragment.appendChild(newBox);
  }
  mainBox.appendChild(fragment);
}

function destroyBoxes() {
  mainBox.innerHTML = '';
  size = 30;
}

