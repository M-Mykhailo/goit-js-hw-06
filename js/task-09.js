const btnChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const colorBody = document.querySelector("body");

btnChangeColor.addEventListener("click", (changeColor) => {
  const randomColor = getRandomHexColor();
  colorBody.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
