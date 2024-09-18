const circleBlue = document.querySelector(".circle-1");
const circleYellow = document.querySelector(".circle-2");
const mouseLocation = document.querySelector(".location");

function showLocation() {
  const location = this.attributes.name.value;

  mouseLocation.textContent = `鼠輩位置在${location}`;

  console.log(`鼠輩位置在${location}`);
}

circleBlue.addEventListener("mouseenter", showLocation);
circleYellow.addEventListener("mouseenter", showLocation);
