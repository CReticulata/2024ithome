const switchBar = document.querySelector(".switch");

function changeLight(event) {
  console.log(event.type);
  document.body.classList.toggle("night");
}

switchBar.addEventListener("click", changeLight);
switchBar.addEventListener("mousedown", (event) => {
  console.log(event.type, event.button);
});
switchBar.addEventListener("mouseup", (event) => {
  console.log(event.type);
});
