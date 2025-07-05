import React from "react";

export const Head = () => {
  let score = JSON.parse(localStorage.getItem("Score")) || {
    wins: 0,
    loses: 0,
  };
  // updateScore();

  function pickComputerMove() {
    let computerMove = "";
    const randomNumber = Number(Math.random());
    // console.log(randomNumber);

    if (randomNumber > 0 && randomNumber < 1 / 2) {
      computerMove = "Head";
    } else if (randomNumber > 1 / 2 && randomNumber < 1) {
      computerMove = "Tail";
    } else {
      computerMove = "Error try again";
    }
    console.log(computerMove);

    return computerMove;
  }

  // playGame();
  function playGame(playerMove) {
    let computerMove = pickComputerMove();
    let result = "";
    updateScore();

    if (playerMove === "Head") {
      if (computerMove === "Head") {
        result = "You Win";
      } else if (computerMove === "Tail") {
        result = "You Lose";
      }
    } else if (playerMove === "Tail") {
      if (computerMove === "Tail") {
        result = "You Win";
      } else if (computerMove === "Head") {
        result = "You Lose";
      }
    }

    console.log(`${result}`);

    if (result === "You Win") {
      score.wins = score.wins + 1;
    } else if (result === "You Lose") {
      score.loses = score.loses + 1;
    }

    let myJson = JSON.stringify(score);
    localStorage.setItem("Score", myJson);

    document.getElementById(
      "js-result"
    ).innerHTML = `You: <img class="img" src="/${playerMove}.png">
      <img class='img' src='/${computerMove}.png'> Computer
    `;

    console.log(`Win:${score.wins}, Lose:${score.loses}`);

    updateScore();
  }

  function updateScore() {
    document.getElementById(
      "js-score"
    ).innerHTML = `Win:${score.wins}, Lose:${score.loses}`;
    // playGame()
  }

  function removeScore() {
    playGame();
    location.reload();
    score.wins = 0;
    score.loses = 0;
    localStorage.removeItem("Score");
    console.log("Score removed");
  }

  let intervalId;
  let isAutoPlay = false;

  function autoPlay() {
    if (!isAutoPlay) {
      intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000);
      isAutoPlay = true;
    } else {
      clearInterval(intervalId);
      isAutoPlay = false;
    }
  }

  setTimeout(() => {
    console.log("settime out");
  }, 3000);

  return (
    <>
      <section className="w-full h-[100vh] flex justify-center overflow-hidden bg-gradient-to-bl from-black via-white/10 to-amber-50/70">
        <div className="flex flex-col mt-[100px]">
          <div className="mb-[20px]">
            <h1 className="text-[50px] lg:text-[100px] HeadTail font-bold">
              Head & Tail
            </h1>
          </div>
          <div>
            <div className="flex-center space-x-10 mb-10">
              <button
                id="Rock"
                className="HeadBtn"
                onClick={() => playGame("Head")}
              ></button>
              {/*                 
                <img className='w-20 h-20 ' src="./Head.png" alt="Head"/>
                <img className='w-20 h-20'src="./Tail.png" alt=""/> */}
              <button
                id="Paper"
                className="TailBtn"
                onClick={() => playGame("Tail")}
              ></button>
            </div>
            <div className="flex-center flex-col">
              <p
                id="js-result"
                onChange={() => updateScore()}
                className="flex justify-center items-center space-x-2 mb-2"
              ></p>
              <p
                id="js-score"
                onChange={() => updateScore()}
                className="mb-4"
              ></p>
              <div className="mt-5 space-x-2">
                <button className="headBtn" onClick={() => removeScore()}>
                  Remove Score
                </button>
                <button className="tailBtn" onClick={() => autoPlay()}>
                  Auto play
                </button>
              </div>
            </div>
          </div>
          <footer>
            <h3 className="mt-20">©Created by lil_fitse 2025-03-31 </h3>
          </footer>
        </div>
      </section>
    </>
  );
};
