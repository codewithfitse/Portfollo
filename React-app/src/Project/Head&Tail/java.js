let score = JSON.parse(localStorage.getItem('Score')) || { wins: 0, loses: 0,};
// updateScore();

function pickComputerMove() {

  let computerMove = '';
  const randomNumber = Number(Math.random());
  // console.log(randomNumber);

  if (randomNumber > 0 && randomNumber < 1/2) {
    computerMove = 'Head';
  } else if (randomNumber > 1/2 && randomNumber < 1) {
    computerMove = 'Tail';
  }  else {
    computerMove = 'Error try again';
  }
  console.log(computerMove);

  return computerMove;

}

// playGame();
function playGame(playerMove) {
  let computerMove = pickComputerMove();
  let result = '';
   updateScore();

    if (playerMove === 'Head') {
      if (computerMove === 'Head') {
        result = 'You Win';
      } else if (computerMove === 'Tail') {
          result = 'You Lose';
      } 
    } else if (playerMove === 'Tail') {
      if (computerMove === 'Tail') {
        result = 'You Win';
      } else if (computerMove === 'Head') {
          result = 'You Lose';
      } 
    }

  console.log(`${result}`);
  
  if (result === 'You Win') {
    score.wins = score.wins + 1;
  } else if (result === 'You Lose') {
    score.loses = score.loses + 1;
  } 
  
  let myJson = JSON.stringify(score);
  localStorage.setItem('Score' , myJson);
  
  document.getElementById('js-result').innerHTML =`You <img class="img1" src="picture/${playerMove}.png">
    <img class='img1' src='picture/${computerMove}.png'> Computer
  `;
  
    console.log(`Win:${score.wins}, Lose:${score.loses}`);
    updateScore();
  }
  


function updateScore() {
    document.getElementById('js-score').innerHTML = 
    `Win:${score.wins}, Lose:${score.loses}`;
    // playGame()
}

function removeScore() {
  playGame()
  location.reload();
 score.wins = 0;
 score.loses = 0;
 localStorage.removeItem('Score');
 console.log('Score removed');
 }


let intervalId;
let isAutoPlay = false;

function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000)
    isAutoPlay = true
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
  }
}


setTimeout( () => {
  console.log('settime out');
},3000)



















