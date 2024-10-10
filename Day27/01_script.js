const usagiHeight = document.querySelector("#usagiHeight");
const usagi = document.querySelector(".usagi");

function changeLight() {
  const currentHeight = this.value;
  usagi.style.top = `-${100 - currentHeight}%`;
}

// usagiHeight.addEventListener("change", changeUsagi);
// usagiHeight.addEventListener("mousemove", changeUsagi);

usagiHeight.addEventListener("input", changeLight);
