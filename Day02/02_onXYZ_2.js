const square = document.querySelector(".square");

function myFunction1() {
  this.style.backgroundColor = "darkseagreen";
}

square.onmouseenter = myFunction1;

// 函式術之二
function myFunction2() {
  this.style.color = "coral";
}

square.onmouseenter = myFunction2;
