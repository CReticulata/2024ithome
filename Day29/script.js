const player = document.querySelector(".player");
const video = player.querySelector("video");
const playButton = player.querySelector(".btn-play");
const fullscreenButton = player.querySelector(".btn-fullscreen");
const text = player.querySelector(".text");

function togglePlay() {
  if (video.paused === true) {
    video.play();
    this.textContent = "▌▌";
  } else {
    video.pause();
    this.textContent = "►";
  }
}

function changeFullscreen() {
  if (document.fullscreenElement === null) {
    player.requestFullscreen();
    this.textContent = "〉〈";
  } else {
    document.exitFullscreen();
    this.textContent = "〈　〉";
  }
}

function showText() {
  if (document.fullscreenElement) {
    text.style.opacity = 1;
    text.style.transition = "opacity 0.3s";

    setTimeout(() => {
      text.style.opacity = 0;
    }, 1000);
  }
}

playButton.addEventListener("click", togglePlay);
fullscreenButton.addEventListener("click", changeFullscreen);

player.addEventListener("fullscreenchange", showText);
