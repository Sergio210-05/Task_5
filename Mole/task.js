
const win = document.getElementById('dead');
const lose = document.getElementById('lost');

let index = 1;
// let winCounter = +win.textContent;
// let loseCounter = +lose.textContent;


//завершение игры
function endGame(alertText) {
  setTimeout(() => {
    alert(alertText);
    win.textContent = 0;
    lose.textContent = 0;
  }, 10);
}


for(index; index<=9; ++index) {
  holeHandler = index => document.getElementById(`hole${index}`);
  // console.log(holeHandler(index).classList);
  let currentHole = holeHandler(index);
  holeHandler(index).onclick = () => {
    let winCounter = +win.textContent;
    let loseCounter = +lose.textContent;
    // console.log(currentHole);
    // console.log(currentHole.classList.contains( 'hole_has-mole' ));
    if ( currentHole.classList.contains( 'hole_has-mole' ) ) {
      win.textContent = ++winCounter;
    } else {
      lose.textContent = ++loseCounter;
    }

    if (winCounter >= 10) {
      endGame('Победа!');
    }
    if (loseCounter >= 5) {
      endGame('Вы проиграли!');
    }
  }
// holeHandler(index);
}

