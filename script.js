let startTime;
let time = document.querySelector(".time");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let timeStampObj = document.querySelector(".timeStamps");

let timer;
let currentTime;
let isStarted = false;

function getCurrentTime() {
  let finalTime = currentTime.getTime() - startTime.getTime();

  let hours = Math.floor(finalTime / 1000 / 60 / 60);
  finalTime -= hours * 1000 * 60 * 60;
  let minutes = Math.floor(finalTime / 1000 / 60);
  finalTime -= minutes * 1000 * 60;
  let seconds = Math.floor(finalTime / 1000);
  finalTime -= seconds * 1000;
  let miliSeconds = finalTime;

  return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
    2,
    "0"
  )} : ${String(seconds).padStart(2, "0")} : ${String(miliSeconds).padStart(
    3,
    "0"
  )}`;
}

function startStopwatch() {
  if (isStarted) return;

  isStarted = true;
  startTime = new Date();

  timer = setInterval(function () {
    currentTime = new Date();

    time.innerHTML = getCurrentTime();
  }, 1);
}

function stopStopwatch() {
  timeStampObj.innerHTML += `<div>${getCurrentTime()}</div>`;
}

function resetStopwatch() {
  clearInterval(timer);
  isStarted = false;
  startStopwatch();
}

startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
