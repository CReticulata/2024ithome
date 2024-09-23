const keyDownList = [];
const summon = "laputa";
const downKeys = document.querySelector(".keys.down");

function showPressedKeys(event, keys, direction) {
  const key = event.key;

  keys.innerHTML += `<div class="key-${direction}">${key}</div>`;
}

function detectSummon(event) {
  console.log(event);
  const key = event.key;

  keyDownList.push(key);

  const pressedCode = keyDownList.join("");
  if (pressedCode.includes(summon)) {
    document.querySelector(".laputa").style.opacity = 1;
  }
}

window.addEventListener("keydown", (event) => {
  showPressedKeys(event, downKeys, "down");
  detectSummon(event);
});
