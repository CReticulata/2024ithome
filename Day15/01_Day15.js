const roller = document.querySelector(".roller");

let angle = 0;

function rotateRoller() {
  angle++;
  this.style.transform = `rotate(${angle * 100}deg)`;
}

roller.addEventListener("wheel", rotateRoller);
