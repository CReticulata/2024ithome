const container = document.querySelector(".container");
const statusText = document.querySelector(".text");
const textarea = document.querySelector(".textarea");

let inputText;

function showStatus() {
  statusText.style.display = "block";

  inputText = document.createElement("p");
  container.insertBefore(inputText, null);
}

function showInputText(event) {
  if (event.data !== "") {
    inputText.textContent = event.data;
  }
}

function hideStatus() {
  statusText.style.display = "none";
}

textarea.addEventListener("compositionstart", showStatus);
textarea.addEventListener("compositionupdate", showInputText);
textarea.addEventListener("compositionend", hideStatus);
