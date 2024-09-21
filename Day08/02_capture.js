const bubbleGrandparent = document.querySelector(".bubble-grandparent");
const bubbleParent = document.querySelector(".bubble-parent");
const bubbleChild = document.querySelector(".bubble-child");
const target = document.querySelector(".target");

function showTarget() {
  const targetName = this.attributes.name.value;
  console.log(targetName);
  target.innerHTML += `<p>鼠輩碰觸了${targetName}<p>`;
}

bubbleGrandparent.addEventListener("mouseover", showTarget, { capture: true });
bubbleParent.addEventListener("mouseover", showTarget, { capture: true });
bubbleChild.addEventListener("mouseover", showTarget, { capture: true });
