const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

function changeBackgroundColor() {
  body.style.backgroundColor = randomColor();
}

function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let myInterval;

start.addEventListener("click", (e) => {
  myInterval = setInterval(changeBackgroundColor, 1000);
});

stop.addEventListener("click", (e) => {
  clearInterval(myInterval);
  // body.style.backgroundColor = "black";
});
