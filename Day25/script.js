const statusText = document.querySelector(".text");
const textarea = document.querySelector(".textarea");

function showStatus() {
  statusText.style.display = "block";
}

function hideStatus() {
  statusText.style.display = "none";
}

textarea.addEventListener("keydown", showStatus);
textarea.addEventListener("change", hideStatus);
