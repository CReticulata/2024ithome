const door = document.querySelector(".door");
const seven = document.querySelector(".seven");

function openDoor() {
  door.style.transform = `rotateY(120deg)`;
  seven.style.transform = `scale(1)`;
}

function showWarning(event) {
  if (event.button === 2) {
    alert("你個偷鼠賊！");
  }
}

door.addEventListener("dblclick", openDoor);

seven.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
seven.addEventListener("auxclick", showWarning);
