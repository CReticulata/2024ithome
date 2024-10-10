const light = document.querySelector("#light");
const usagi = document.querySelector(".usagi");

function changeLight() {
  const currentLight = this.value;
  usagi.style.filter = `drop-shadow(-10px -10px 10px ${currentLight})`;
}

// light.addEventListener("change", changeLight);
// light.addEventListener("mousemove", changeLight);

light.addEventListener("input", changeLight);
