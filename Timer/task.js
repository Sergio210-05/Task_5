
// Функция для создания ведущих нулей
function pad(num, size=2) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

const timer = document.getElementById('timer');
let coundown = +timer.textContent;
console.log(coundown);

let runTimer;
runTimer = setInterval(() => {
  // coundown--;
  hhmmss = `${pad(Math.floor(coundown/3600))}:${pad(Math.floor(coundown/60))}:${pad(coundown%60)}`;
  timer.textContent = hhmmss;
  console.log(hhmmss);
  if (coundown === 0) {
    clearInterval(runTimer);
    alert('Вы победили в конкурсе!');
  }
  coundown--;
}, 1000);

