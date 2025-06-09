const cells = document.querySelectorAll('.cell');
const titleHeader = document.querySelector('#titleHeader');
const xPlayerDisplay = document.querySelector('#xPlayerDisplay');
const oPlayerDisplay = document.querySelector('#oPlayerDisplay');
const restartBtn = document.querySelector('#restartBtn');
const jsscore = document.querySelector('#js-score');

let score = {
  wins: 0,
  loses: 0,
}


// intilaized variabel

let player = 'X';
let isPauseGame = false;
let isGameStart = false;

// Win condition 

const inputCells =
['', '', '',
 '', '', '',
 '', '', ''];

// Array of wins condition

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8], // Rows
  [0,3,6], [1,4,7], [3,5,8], // columns
  [0,4,8], [2,4,6] // Diagonals
];

console.log(cells);
// console.log(titleHeader);

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => tapCell(cell, index) )
})

function tapCell(cell, index) {
// if there is no tecx in cell do this..

  if ( cell.textContent == '' &&
    !isPauseGame
  ) {
    isGameStart = true;
    updateCell(cell, index);
    // Do random Pick if there are no results
    if (!checkWinner()) {
      changePlayer();
      randomPick();
    }
  }
}

function updateCell(cell, index) {
  // Execute the code
  cell.textContent = player;
  inputCells[index] = player
  console.log(inputCells);
  cell.style.color = (player == 'X') ? '#1892ea' : '#a737ff';
}

function changePlayer() {
  player = (player == 'X') ? 'O' : 'X';
}

function randomPick() {
  isPauseGame = true;

  setTimeout(() => {
    let randomIndex;

      do {
        // pick random move
        randomIndex = Math.floor(Math.random() * inputCells.length);
      } while (
        // check if cells are are empty
        inputCells[randomIndex] != ''
      )
      // console.log(randomIndex);
      updateCell(cells[randomIndex], randomIndex, player);
  
      if (!checkWinner()) {
        changePlayer();
        // Switch back to human player
        isPauseGame = false;
        return;
      }
      player = (player == 'X') ? 'O' : 'X';
    }, 1000)
}

function checkWinner() {
  for (const [a, b, c] of winConditions) {
    if (
      inputCells[a] == player &&
      inputCells[b] == player &&
      inputCells[c] == player 
    ) {
      declare([a,b,c])
      return true;
    }
  }

  if (inputCells.every(cell => cell != '')) {
    declareDraw();
  }

}

function declare(winningIndices) {
  titleHeader.textContent = `${player} Win!`;
  isPauseGame = true;

  winningIndices.forEach((index) => {
    cells[index].style.background = '#2a2343';
  } )
  restartBtn.style.visibility = 'visible';
}

restartBtn.addEventListener('click', () => {
  restartBtn.style.visibility = 'hidden';
  inputCells.fill('');
  cells.forEach(cell  => {
    cell.textContent = '';
    cell.style.background = '';
  })
  isGameStart = false;
  isPauseGame = false;
  titleHeader.textContent = 'Choose';
}) 

function declareDraw() {
  titleHeader.textContent = 'Draw!'
  restartBtn.style.visibility = 'visible';
  isPauseGame = false;
  isGameStart = false;
}

function choosePlayer(selectedPlayer) {
  // console.log(selected);
  // overwrite selected player value

  player = selectedPlayer;

  if (player == 'X') {
    // highlight x display
    xPlayerDisplay.classList.add('player-active');
    oPlayerDisplay.classList.remove('player-active');
  } else if (player == 'O') {
        // highlight O display
    oPlayerDisplay.classList.add('player-active');
    xPlayerDisplay.classList.remove('player-active');
  }
} 


























