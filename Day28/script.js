const textForCopy = document.querySelector(".text-copy");
const todaysFortune = document.querySelector(".fortune-today");

function drawFortune(event) {
  const selectionText = document.getSelection().toString();
  const luckyNumber = selectionText.length;
  switch (luckyNumber % 5) {
    case 0:
      todaysFortune.textContent = "大吉";
      break;
    case 1:
      todaysFortune.textContent = "小吉";
      break;
    case 2:
      todaysFortune.textContent = "中";
      break;
    case 3:
      todaysFortune.textContent = "小凶";
      break;
    case 4:
      todaysFortune.textContent = "大凶";
      break;
  }
}

textForCopy.addEventListener("copy", drawFortune);
