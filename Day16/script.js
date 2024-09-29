const houses = document.querySelectorAll(".house");

let angle = 0;

function rotateRoller() {
  angle++;
  const roller = this.querySelector(".roller");
  roller.style.transform = `rotate(${angle * 100}deg)`;
}

houses.forEach((house) => {
  house.addEventListener("scroll", rotateRoller);
});
