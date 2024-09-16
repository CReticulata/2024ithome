const button = document.querySelector("button");
const square = document.querySelector(".square");

// mousedown
function getBuff() {
  const buff = square.querySelector("img");
  buff.style.opacity = 1;
}

button.addEventListener("mousedown", getBuff);

// mouseup
function showLove() {
  const love = document.querySelector(".love");
  love.style.opacity = 1;
}

window.addEventListener("mousedown", () => {
  console.log("鼠輩已點按");
});
square.addEventListener("mouseup", showLove);
