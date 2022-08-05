const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
const INTERVAL_DELAY = 1000;

bodyEl.classList.add('body__task1');
startBtn.classList.add('button');
stopBtn.classList.add('button');

let timerId = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', colorChange);
stopBtn.addEventListener('click', onStopBtn);

function colorChange() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DELAY);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStopBtn() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
