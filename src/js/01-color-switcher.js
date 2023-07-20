function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");
const bodyColor = document.querySelector("body");
let timerId = null;



startButton.addEventListener('click', start);
function start(){
  startButton.disabled = true;
  stopButton.disabled = false;

timerId = setInterval(()=> {bodyColor.style.backgroundColor = getRandomHexColor()}, 1000)
}

stopButton.addEventListener('click', stop);
function stop(){
  startButton.disabled = false;
  startButton.disabled = true;
  clearInterval(timerId);
}
