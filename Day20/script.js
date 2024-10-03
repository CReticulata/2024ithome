const container = document.querySelector(".container");

function becomeEvil(event) {
  // this.style.backgroundImage = `url("./momo_ya.png")`;
  event.target.style.backgroundImage = `url("./momo_ya.png")`;
}

function mitte(event) {
  // this.style.backgroundImage = `url("./momo_mitte.png")`;
  event.target.style.backgroundImage = `url("./momo_mitte.png")`;
}

function addMomo() {
  const newMomo = document.createElement("a");
  newMomo.setAttribute("class", "momo");
  newMomo.setAttribute("href", "##");
  container.insertBefore(newMomo, container.lastChild);
}

window.addEventListener("scrollend", addMomo);

container.addEventListener("focusin", becomeEvil);
container.addEventListener("focusout", mitte);
