const momo = document.querySelector(".momo");
const text = document.querySelector(".text");

function becomeEvil() {
  this.style.backgroundImage = `url("./momo_ya.png")`;
  text.textContent = `我很可愛。`;
}

function mitte() {
  this.style.backgroundImage = `url("./momo_mitte.png")`;
  text.textContent = `看～我～～`;
}

momo.addEventListener("focus", becomeEvil);
momo.addEventListener("blur", mitte);

momo.addEventListener("click", (event) => {
  event.preventDefault();
});
