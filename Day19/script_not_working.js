const momoes = document.querySelectorAll(".momo");
const container = document.querySelector(".container");

function becomeEvil() {
  this.style.backgroundImage = `url("./momo_ya.png")`;
}

function mitte() {
  this.style.backgroundImage = `url("./momo_mitte.png")`;
}

function addMomo() {
  const newMomo = document.createElement("a");
  newMomo.setAttribute("class", "momo");
  newMomo.setAttribute("href", "##");
  container.insertBefore(newMomo, container.lastChild);
}

momoes.forEach((momo) => {
  momo.addEventListener("focus", becomeEvil);
  momo.addEventListener("blur", mitte);

  momo.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

window.addEventListener("scrollend", addMomo);
