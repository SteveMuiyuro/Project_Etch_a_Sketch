const grid = document.querySelector(".main");
const resetButton = document.querySelector(".reset_button");
let spanText = document.querySelector(".span_text");
let spanText2 = document.querySelector(".span_text2");
let seperator = document.querySelector(".seperator");
const number = document.getElementById("number");
let color = document.getElementById("color_picker").value;
let color_picked = (document.getElementById("color_picker").onchange =
  function () {
    color = this.value;
  });

const populateBoard = (sizeInput) => {
  grid.style.cssText = `grid-template-columns:repeat(${sizeInput}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${sizeInput}, 1fr)`;
  for (let i = 0; i < sizeInput * sizeInput; i++) {
    const div = document.createElement("div");
    div.style.cssText = "background-color:#d1d5db";
    grid.appendChild(div);
    div.addEventListener("mouseover", changeColor);
  }
};

const selectedGridSize = (input) => {
  populateBoard(input);
  spanText.innerText = `${input}`;
  spanText2.innerText = `${input}`;
  seperator.innerText = " x ";
};

function changeColor() {
  this.style.backgroundColor = `${color}`;
}

resetButton.addEventListener("click", () => {
  grid.innerHTML = "";
  spanText.innerText = "";
  spanText2.innerText = "";
  seperator.innerText = "";
});

console.log(number.onchange);
