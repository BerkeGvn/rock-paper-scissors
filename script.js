const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const para = document.querySelector(".round");
const countPlayer = document.querySelector(".countPlayer");
const countComputer = document.querySelector(".countComputer");
const restartBtn = document.querySelector(".restart");
const rockIcon = document.querySelector(".rock-icon");
const paperIcon = document.querySelector(".paper-icon");
const scissorsIcon = document.querySelector(".scissors-icon");
let playerCount = 0;
let computerCount = 0;
let playerSelection = "";
let computerSelection = "";
let roundLog = playRound(playerSelection, computerSelection);
btnRock.addEventListener("click", function () {
  playerSelection = "rock";
  computerSelection = computerPlay();
  roundLog = playRound(playerSelection, computerSelection);
  if (roundLog == true) {
    rockIcon.style.color = "#009933";
    scissorsIcon.style.color = "#990000";
    paperIcon.style.color = "#0d0d0d";
    para.textContent = `You win! Rock beats ${computerSelection}`;
  } else if (roundLog == false) {
    rockIcon.style.color = "#990000";
    paperIcon.style.color = "#009933";
    scissorsIcon.style.color = "#0d0d0d";
    para.textContent = `You lose! ${computerSelection} beats rock `;
  } else {
    para.textContent = "It's a tie!";
    scissorsIcon.style.color = "#0d0d0d";
    paperIcon.style.color = "#0d0d0d";
    rockIcon.style.color = "#0d0d0d";
  }
  result();
});

btnPaper.addEventListener("click", function () {
  playerSelection = "paper";
  computerSelection = computerPlay();
  roundLog = playRound(playerSelection, computerSelection);
  if (roundLog == true) {
    paperIcon.style.color = "#009933";
    rockIcon.style.color = "#990000";
    scissorsIcon.style.color = "#0d0d0d";
    para.textContent = `You win! Paper beats ${computerSelection}`;
  } else if (roundLog == false) {
    scissorsIcon.style.color = "#009933";
    paperIcon.style.color = "#990000";
    rockIcon.style.color = "#0d0d0d";
    para.textContent = `You lose! ${computerSelection} beats paper `;
  } else {
    scissorsIcon.style.color = "#0d0d0d";
    paperIcon.style.color = "#0d0d0d";
    rockIcon.style.color = "#0d0d0d";
    para.textContent = "It's a tie!";
  }
  result();
});

btnScissors.addEventListener("click", function () {
  playerSelection = "scissors";
  computerSelection = computerPlay();
  roundLog = playRound(playerSelection, computerSelection);
  if (roundLog == true) {
    scissorsIcon.style.color = "#009933";
    paperIcon.style.color = "#990000";
    rockIcon.style.color = "#0d0d0d";
    para.textContent = `You win! Scissors beats ${computerSelection}`;
  } else if (roundLog == false) {
    scissorsIcon.style.color = "#990000";
    rockIcon.style.color = "#009933";
    paperIcon.style.color = "#0d0d0d";
    para.textContent = `You lose! ${computerSelection} beats scissors `;
  } else {
    scissorsIcon.style.color = "#0d0d0d";
    paperIcon.style.color = "#0d0d0d";
    rockIcon.style.color = "#0d0d0d";
    para.textContent = "It's a tie!";
  }
  result();
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerCount++;
    countComputer.textContent = computerCount;
    return false;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerCount++;
    countPlayer.textContent = playerCount;
    return true;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerCount++;
    countComputer.textContent = computerCount;
    return false;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerCount++;
    countPlayer.textContent = playerCount;
    return true;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerCount++;
    countPlayer.textContent = playerCount;
    return true;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerCount++;
    countComputer.textContent = computerCount;
    return false;
  }
}

function computerPlay() {
  let randomValue = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  switch (randomValue) {
    case 1:
      return "rock";

      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function result() {
  if (playerCount === 5) {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    para.textContent = "Congratulations. You win!";
  } else if (computerCount === 5) {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    para.textContent = "You lose the game :( ";
  }
}

restartBtn.addEventListener("click", function () {
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
  scissorsIcon.style.color = "#0d0d0d";
  paperIcon.style.color = "#0d0d0d";
  rockIcon.style.color = "#0d0d0d";
  para.textContent = ``;
  playerCount = 0;
  computerCount = 0;
  countPlayer.textContent = "0";
  countComputer.textContent = "0";
});
