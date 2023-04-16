function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const colorBody = document.querySelector('body');

btnChangeColor.addEventListener('click', changeColor => {
  colorBody.style.backgroundColor = getRandomHexColor();
  textColor.textContent = colorBody.style.backgroundColor;
});
