let startTime;
let container = document.querySelector(".container");

function startStopwatch() {
  startTime = new Date();
}
startStopwatch();
setInterval(function () {
  let currentTime = new Date();
  let finalTime = currentTime.getTime() - startTime.getTime();

  let hours = Math.floor(finalTime / 1000 / 60 / 60);
  finalTime -= hours * 1000 * 60 * 60;
  let minutes = Math.floor(finalTime / 1000 / 60);
  finalTime -= minutes * 1000 * 60;
  let seconds = Math.floor(finalTime / 1000);
  finalTime -= seconds * 1000;
  let miliSeconds = finalTime;

  container.innerHTML = `${hours} : ${minutes} : ${seconds} : ${miliSeconds}`;
}, 1);
