function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const getColor = getRandomHexColor
const button = document.querySelector(".change-color");
button.addEventListener("click", handleClick => {
  const body = document.querySelector("body");
  body.style = `BackgroundColor: ${getColor()}`;
  body.style.backgroundColor = getColor();
  const span = document.querySelector(".color");
  span.textContent = getRandomHexColor();
});
