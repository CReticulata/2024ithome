const keys = document.querySelector(".keys");
const text = document.querySelector(".text");

function showPressedKeys(event) {
  const key = event.key;

  const singleKey = document.createElement("div");
  singleKey.classList.add("key-down");
  singleKey.textContent = `${key}`;
  keys.insertBefore(singleKey, null);

  setTimeout(() => {
    singleKey.classList.add("heater");
  }, 1000);

  setTimeout(() => {
    singleKey.style.transition = "none";
  }, 3000);
}

window.addEventListener("keydown", showPressedKeys);

keys.addEventListener("transitionend", (event) => {
  text.textContent = "END事件發生";

  event.target.textContent = "🤪";
});

keys.addEventListener("transitioncancel", (event) => {
  text.textContent = "CANCEL事件發生";

  event.target.textContent = "❌";
});

keys.addEventListener("transitionstart", () => {
  text.textContent = "START事件發生";
});

keys.addEventListener("transitionrun", () => {
  text.textContent = "RUN事件發生";
});
