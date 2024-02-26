function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", changeBackgroundColor => {
  const colorSelect = getRandomHexColor()
  body.style.backgroundColor = colorSelect;
  span.textContent = colorSelect;
});
