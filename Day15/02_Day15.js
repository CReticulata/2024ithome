const roller = document.querySelector(".roller");

let angle = 0;

function rotateRoller(event) {
  console.dir(event);
  if (event.ctrlKey === true) {
    event.preventDefault();
    angle++;
    this.style.transform = `rotate(${angle * 100}deg)`;
  }
}

roller.addEventListener("wheel", rotateRoller);
