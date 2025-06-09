let score = JSON.parse(localStorage.getItem('Score')) || { wins: 0, loses: 0, ties: 0,};
// updateScore();

function pickComputerMove() {

  let computerMove = '';
  const randomNumber = Number(Math.random());
  // console.log(randomNumber);

  if (randomNumber > 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber > 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber > 2/3 && randomNumber < 1){
    computerMove = 'Scissor';
  } else {
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

    if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
        result = 'You Tie';
      } else if (computerMove === 'Paper') {
          result = 'You Lose';
      } else if (computerMove === 'Scissor') {
          result = 'You Win';
      }
    } else if (playerMove === 'Paper') {
      if (computerMove === 'Paper') {
        result = 'You Tie';
      } else if (computerMove === 'Scissor') {
         result = 'You Lose';
      } else if (computerMove === 'Rock') {
        result = 'You Win';
      }
    } else if (playerMove === 'Scissor') {
      if (computerMove === 'Scissor') {
        result = 'You Tie';
      } else if (computerMove === 'Rock') {
          result = 'You Lose';
      } else if (computerMove === 'Paper') {
          result = 'You Win';
      }
    }

  console.log(`${result}`);
  
  if (result === 'You Win') {
    score.wins = score.wins + 1;
  } else if (result === 'You Lose') {
    score.loses = score.loses + 1;
  } else if (result === 'You Tie') {
    score.ties = score.ties + 1;
  }
  
  let myJson = JSON.stringify(score);
  localStorage.setItem('Score' , myJson);
  
  document.getElementById('js-result').innerHTML =`You <img class="img" src="picture/${playerMove}-emoji.png">
    <img class='img' src='picture/${computerMove}-emoji.png'> Computer
  `;
  
    console.log(`Win:${score.wins}, Lose:${score.loses}, Tie:${score.ties}`);
    updateScore();
  }
  


function updateScore() {
    document.getElementById('js-score').innerHTML = 
    `Win:${score.wins}, Lose:${score.loses}, Tie:${score.ties}`;
    // playGame()
}

function removeScore() {
  playGame()
  location.reload();
 score.wins = 0;
 score.loses = 0;
 score.ties = 0;
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



















