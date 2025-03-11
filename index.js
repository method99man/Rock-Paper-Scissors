const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const btnList = document.querySelectorAll("button");

btnList.forEach((button) => {
  console.log(button);
});

console.log(rockBtn, paperBtn, scissorsBtn, btnList);

rockBtn.addEventListener("click", () => {
  playRound();
});

let humanScore = 0,
  computerScore = 0;

choices = ["rock", "paper", "scissors"];

function getHumanChoice() {
  return prompt("Please enter your choice: ");
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWin(x, y) {
  if (x == y) {
    humanScore++;
    computerScore++;
    console.log("It's a tie!");
  } else if (x == "rock" && y == "paper") {
    computerScore++;
    console.log("Paper win!");
  } else if (x == "rock" && y == "scissors") {
    humanScore++;
    console.log("Rock win!");
  } else if (x == "paper" && y == "rock") {
    humanScore++;
    console.log("Paper win!");
  } else if (x == "paper" && y == "scissors") {
    computerScore++;
    console.log("Scissors win!");
  } else if (x == "scissors" && y == "rock") {
    computerScore++;
    console.log("Rock win!");
  } else if (x == "scissors" && y == "paper") {
    humanScore++;
    console.log("Scissors win!");
  }
}

function playRound() {
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice();

  console.log(humanChoice, "agains", computerChoice);

  checkWin(humanChoice, computerChoice);
}

// for (let i = 0; i < 5; i++) {
//   playRound();

//   console.log("Your score: ", humanScore);
//   console.log("CPU score: ", computerScore);
// }

// if (humanScore == computerScore) {
//   console.log("It's a tie!");
// } else if (humanScore > computerScore) {
//   console.log("You won!");
// } else {
//   console.log("Computer won!");
// }
