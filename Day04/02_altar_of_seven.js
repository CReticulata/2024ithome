const square = document.querySelector(".square");
const seven = document.querySelector(".square img");
const totalLove = document.querySelector(".total-love");
const sevenSoul = document.querySelector(".seven-soul");

let isPressed = false;
let loveValue = 0;

function touchSeven(event) {
  isPressed = true;

  event.preventDefault();
}

function showLoveBubble(node, event) {
  const x = event.offsetX;
  const y = event.offsetY - 70;
  const love = document.createElement("span");
  love.classList.add("love");
  love.textContent = "♥";
  node.insertBefore(love, node.firstChild);

  love.style.transition = `opacity 0.5s`;
  love.style.transform = `translate(${x}px, ${y}px)`;
  love.style.opacity = 1;

  setTimeout(() => {
    love.style.transition = `opacity 0.5s, transform 0.3s`;
    love.style.transform = `translate(${x}px, ${y - 10}px)`;
    love.style.opacity = 0;
  }, 500);

  setTimeout(() => {
    love.remove();
  }, 1000);
}

function giveLove(event) {
  const reduceCondition = Math.round(event.timeStamp) % 10 === 0;
  console.log(Math.round(event.timeStamp));

  if (isPressed === true && reduceCondition) {
    showLoveBubble(square, event);
    loveValue++;
  }
}

function getTotalLove() {
  isPressed = false;

  totalLove.textContent = `目前功德量: ${loveValue}點`;
  if (loveValue >= 100) {
    sevenSoul.style.display = `block`;

    setTimeout(() => {
      sevenSoul.style.transform = `translate(0, -200px)`;
      sevenSoul.style.opacity = 0;
    }, 200);
  }
}

seven.addEventListener("mousedown", touchSeven);
seven.addEventListener("mousemove", giveLove);
seven.addEventListener("mouseup", getTotalLove);
