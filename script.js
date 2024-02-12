const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const hoursElement = document.getElementById("hours");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let hours = 0;
let timer;
let running = false;

minutesElement.innerText = "0" + minutes;
secondsElement.innerText = "0" + seconds;
hoursElement.innerText = "0" + hours;

function renderSeconds() {
  if (seconds < 10) {
    secondsElement.innerText = "0" + seconds;
  } else if (seconds < 60) {
    secondsElement.innerText = seconds;
  } else {
    seconds = 0;
    minutes++;
    secondsElement.innerText = "0" + seconds;
  }
}

function renderMinutes() {
  if (minutes < 10) {
    minutesElement.innerText = "0" + minutes;
  } else if (minutes < 60) {
    minutesElement.innerText = minutes;
  } else {
    minutes = 0;
    hours++;
    minutesElement.innerText = "0" + minutes;
  }
}

function renderHours() {
  if (hours < 10) {
    hoursElement.innerText = "0" + hours;
  } else if (hours < 24) {
    hoursElement.innerText = hours;
  } else {
    hours = 0;
    hoursElement.innerText = "0" + hours;
  }
}

startButton.onclick = () => {
  if (!running) {
    timer = setInterval(() => {
      seconds++;
      renderSeconds();
      renderMinutes();
      renderHours();
    }, 1000);
    running = true;
  }
};

stopButton.onclick = () => {
  clearInterval(timer);
  running = false;
};

resetButton.onclick = () => {
  seconds = 0;
  minutes = 0;
  clearInterval(timer);
  running = false;
  renderSeconds();
  renderMinutes();
  renderHours();
};
