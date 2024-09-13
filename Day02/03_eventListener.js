const square = document.querySelector(".square");

function myFunction1() {
  this.style.backgroundColor = "darkseagreen";
}

function myFunction2() {
  this.style.color = "coral";
}

// 以EventListener改寫
square.addEventListener("mouseenter", myFunction1);
square.addEventListener("mouseenter", myFunction2);
