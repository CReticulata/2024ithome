const square = document.querySelector(".square");

function printEvent(event) {
  console.log(event);
}

square.addEventListener("mousemove", printEvent);
