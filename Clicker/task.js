
let clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

const clickerSpeed = document.getElementById('clicker__speed');
clickerSpeed.textContent = `Скорость клика: 0`;

let muliplicator = 1.25;
let counter = +clickerCounter.textContent;
let clickSpeed;
let start;
cookie.onclick = () => {
  start = (start === undefined) ? Date.now() : start;
  clickerCounter.textContent = ++counter;
  cookie.width *= muliplicator;
  cookie.height *= muliplicator;
  muliplicator = Math.pow(muliplicator, -1);
  speed = (counter === 1) ? 1 : counter / (Date.now() - start) * 1000;
  clickerSpeed.textContent = `Скорость клика: ${Math.floor(speed * 100) / 100}`;
}