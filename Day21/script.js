const door = document.querySelector(".door");
const seven = document.querySelector(".seven");
const text = document.querySelector(".text");

function openDoor() {
  door.style.transform = `rotateY(120deg)`;
  seven.style.transform = `scale(1)`;
}

function showText(event) {
  if (event.type === "transitionrun") {
    text.textContent = "小七鼠正前來開門";
  } else {
    text.textContent = "小七鼠來開門了！";
  }
}

door.addEventListener("dblclick", openDoor);

seven.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

door.addEventListener("transitionstart", showText);
door.addEventListener("transitionrun", showText);
