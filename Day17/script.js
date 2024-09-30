const sevens = document.querySelectorAll(".seven");
const container = document.querySelector(".container");

function showPicture() {
  sevens.forEach((seven) => {
    const currentViewBottom = this.scrollY + this.innerHeight;
    const sevenPosition = seven.offsetTop + seven.offsetHeight / 2;

    if (currentViewBottom > sevenPosition) {
      seven.style.opacity = 1;
    }
  });
}

let endCount = 0;

function addSeven() {
  const newSeven = document.createElement("img");
  newSeven.setAttribute("class", "seven new");
  newSeven.setAttribute("src", "./seven_mochi.png");
  container.insertBefore(newSeven, container.lastChild);

  endCount++;

  if (endCount >= 10) {
    const cupSeven = document.createElement("img");
    cupSeven.setAttribute("class", "seven new cup");
    cupSeven.setAttribute("src", "./cup_of_seven.png");
    container.insertBefore(cupSeven, container.lastChild);

    window.removeEventListener("scrollend", addSeven);
  }
}

window.addEventListener("scroll", showPicture);
window.addEventListener("scrollend", addSeven);
