const button = document.querySelector("button");
const downKeys = document.querySelector(".keys.down");

function showPressedKeys(event, keys, direction) {
  const key = event.key;

  keys.innerHTML += `<div class="key-${direction}">${key}</div>`;
}

function myFunction() {
  alert("打咩");
}

button.addEventListener("click", myFunction);
window.addEventListener("keydown", (event) => {
  showPressedKeys(event, downKeys, "down");
});
