const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

let buttons = [rockBtn, paperBtn, scissorsBtn];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playRound(btn.textContent);
    round++;
    endGame();
  });
});

let humanScore = 0,
  computerScore = 0,
  round = 0;

choices = ["rock", "paper", "scissors"];

function getHumanChoice() {
  return prompt("Please enter your choice: ");
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWin(x, y) {
  if (x === y) {
    humanScore++;
    computerScore++;
    result.textContent += "It's a tie!";
  } else if (x == "rock" && y == "paper") {
    computerScore++;
    result.textContent += "Paper win!";
  } else if (x == "rock" && y == "scissors") {
    humanScore++;
    result.textContent += "Rock win!";
  } else if (x == "paper" && y == "rock") {
    humanScore++;
    result.textContent += "Paper win!";
  } else if (x == "paper" && y == "scissors") {
    computerScore++;
    result.textContent += "Scissors win!";
  } else if (x == "scissors" && y == "rock") {
    computerScore++;
    result.textContent += "Rock win!";
  } else if (x == "scissors" && y == "paper") {
    humanScore++;
    result.textContent += "Scissors win!";
  }
  score.textContent = `Player1: ${humanScore}, CPU: ${computerScore}`;
}

function playRound(choice) {
  let humanChoice = choice.toLowerCase();
  let computerChoice = getComputerChoice();

  result.textContent = "";
  result.textContent += `${humanChoice} agains ${computerChoice} -> `;

  checkWin(humanChoice, computerChoice);
}

function endGame() {
  if (round == 5) {
    if (humanScore == computerScore) {
      alert("It's a tie!");
    } else if (humanScore > computerScore) {
      alert(`You won! Player: ${humanScore}, CPU: ${computerScore}`);
    } else {
      alert(`Computer won! Player: ${humanScore}, CPU: ${computerScore}`);
    }
    window.location.href = window.location.href;
  }
}
