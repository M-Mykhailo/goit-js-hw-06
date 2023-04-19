const controlsBox = document.getElementById("controls");
const inputNumb = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const mainBox = document.querySelector("#boxes");

const defaultInputValue = 0;
const defaultSize = 30;
const step = Number(inputNumb.step);
const min = Number(inputNumb.min);
const max = Number(inputNumb.max);
const message = "Неправильна кількість";

let inputValue = defaultInputValue;
let size = defaultSize;

btnCreate.addEventListener("click", onCreateClick);
btnDestroy.addEventListener("click", destroyBoxes);
inputNumb.addEventListener("input", onInputChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onInputChange({ target: { value } }) {
  inputValue = value;
}

function onCreateClick() {
  createBoxes(inputValue);
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  if (amount < min || amount > max) {
    
    return alert(message);

  } else {
    for (let i = 1; i <= amount; i += step) {
      const newBox = document.createElement("div");
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      newBox.style.background = getRandomHexColor();
      size += 10;
      fragment.appendChild(newBox);
    }

    mainBox.appendChild(fragment);
    size = defaultSize;
  }
    

}

function destroyBoxes() {
  inputNumb.value = "";
  mainBox.innerHTML = "";
  size = defaultSize;
}

