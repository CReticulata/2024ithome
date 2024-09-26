const testArea = document.querySelector("#mouse-container");

testArea.addEventListener("mousedown", (event) => {
  console.log(event.button);
});

testArea.addEventListener("mousemove", (event) => {
  console.log(event.button);
});
