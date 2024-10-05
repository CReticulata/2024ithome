const keys = document.querySelector(".keys");

function showPressedKeys(event) {
  const key = event.key;

  const singleKey = document.createElement("div");
  singleKey.classList.add("key-down");
  singleKey.textContent = `${key}`;
  keys.insertBefore(singleKey, null);

  setTimeout(() => {
    singleKey.classList.add("heater");
  }, 1000);
}

window.addEventListener("keydown", showPressedKeys);

keys.addEventListener("transitionend", (event) => {
  event.target.textContent = "🤪";
});
