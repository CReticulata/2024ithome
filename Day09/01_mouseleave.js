const house = document.querySelector(".house");
const roller = document.querySelector(".roller");

let intervalID;
let angle = 0;

function rotateRoller() {
  intervalID = setInterval(() => {
    angle++;
    this.style.transform = `rotate(${angle * 8}deg)`;
  }, 10);
}

function stopRoller() {
  clearInterval(intervalID);
}

function puchipusai(event) {
  const pupu = document.createElement("div");
  pupu.classList.add("pupu");
  pupu.style.left = `${event.clientX}px`;
  pupu.style.top = `${event.clientY}px`;

  document.body.insertBefore(pupu, document.body.lastChild);
}

roller.addEventListener("mouseenter", rotateRoller);
roller.addEventListener("mouseleave", stopRoller);

roller.addEventListener("mouseleave", puchipusai);
house.addEventListener("mouseleave", puchipusai);
