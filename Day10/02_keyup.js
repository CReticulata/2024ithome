const keyUpList = [];
const spell = "barus";
const upKeys = document.querySelector(".keys.up");

function detectSpell(event) {
  const key = event.key;

  keyUpList.push(key);

  const pressedCode = keyUpList.join("");
  if (pressedCode.includes(spell)) {
    document.querySelector(".barus").style.opacity = 0;
  }
}

window.addEventListener("keyup", (event) => {
  showPressedKeys(event, upKeys, "up");
  detectSpell(event);
});
