function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const textInput = document.querySelector("input");
const boxes = document.querySelector("#boxes");



function handleCreate() {
  let inputValue;
  if (textInput.value > 0 && textInput.value < 101) {
    createBoxes(textInput.value);
    textInput.value = "";
  } else {
    alert("Amount is not correct");
  }
}
  
buttonCreate.addEventListener("click", handleCreate);

function handleDestroy() {
  textInput.value = "";
  boxes.innerHTML = "";
}

buttonDestroy.addEventListener("click", handleDestroy);

function createBoxes(amount) {
  let boxsize;
  let newDiv;
  boxes.innerHTML = "";
  boxsize = 30;

  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}




