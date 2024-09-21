const bubbleGrandparent = document.querySelector(".bubble-grandparent");
const bubbleParent = document.querySelector(".bubble-parent");
const bubbleChild = document.querySelector(".bubble-child");
const target = document.querySelector(".target");

function showTarget(event) {
  // 戳破事件虛幻泡沫之術
  event.stopPropagation();

  const targetName = this.attributes.name.value;
  console.log(targetName);
  target.innerHTML += `<p>鼠輩碰觸了${targetName}<p>`;
}

bubbleGrandparent.addEventListener("mouseover", showTarget);
bubbleParent.addEventListener("mouseover", showTarget);
bubbleChild.addEventListener("mouseover", showTarget);
