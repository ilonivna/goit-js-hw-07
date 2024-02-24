const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")

const handleInput = event => {
    output.textContent = event.target.value.trim();
    if (event.target.value.trim() === "") {
        output.textContent = "Anonymous";
    }
}
input.addEventListener("input", handleInput);
