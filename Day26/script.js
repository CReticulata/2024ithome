const statusText = document.querySelector(".text");
const textarea = document.querySelector(".textarea");

function showStatus() {
  statusText.style.display = "block";
}

function hideStatus() {
  statusText.style.display = "none";
}

textarea.addEventListener("input", (event) => {
  console.log(event.type);
  showStatus();
});
textarea.addEventListener("beforeinput", (event) => {
  console.log(event.type);
});
textarea.addEventListener("change", hideStatus);
