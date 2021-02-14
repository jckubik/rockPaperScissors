// Select the buttons
const buttons = document.querySelectorAll(`.button`);
const playerDisplay = document.querySelector(`.playerDisplay`);
const computerDisplay = document.querySelector(`.computerDisplay`);
const winnerHeader = document.querySelector(`#winnerHeading`);
let playerChoice;
let playerHasChosen = false;
let computerChoice;

function playBackgroundMusic() {
  const backgroundMusic = new Audio(`file:///Users/Jacob/Downloads/Interstellar%20Odyssey.ogg`);
  backgroundMusic.play();
}

function handlePlayerChoice(e) {
  computerDisplay.innerHTML = `? ? ?`;
  winnerHeader.innerHTML = ``;
  playerChoice = `${e.target.value}`;
  playerHasChosen = true;
  console.log(playerChoice);
  playerDisplay.innerHTML = `<span id='${e.target.value}' class='choice'>${e.target.value}</span>`;
}

function pcChoice() {
  // Randomly select the pc's choice - random number selects from 'options'
  let options = [`rock`, `paper`, `scissors`];
  let randomize = (length) => Math.floor(Math.random() * (length));
  let random = randomize(options.length);
  computerChoice = options[random];
  computerDisplay.innerHTML = `<span id='${computerChoice}' class='choice'>${computerChoice}</span>`
  console.log(computerChoice);
  decideWinner(computerChoice, playerChoice);
}

function decideWinner(computer, player) {
  let playerWon = false;
  let tie = false;
  playerHasChosen = false;

  if (player === computer) {
    tie = true;
  }

  // Player wins with rock
  if (player === `rock` && computer === `scissors`) {
    playerWon = true;
  }
  // Player wins with paper
  if (player === `paper` && computer === `rock`) {
    playerWon = true;
  }
  // Player wins with scissors
  if (player === `scissors` && computer === `paper`) {
    playerWon = true;
  }
  if (playerWon) {
    return winnerHeader.innerHTML = `Player Wins!`;
  } else if (tie) {
    return winnerHeader.innerHTML = `Tied`;
  } else {
    return winnerHeader.innerHTML = `Computer Won..`;
  }
}

function handleButtonClick(e) {
  const options = [`rock`, `paper`, `scissors`];
  if (e.target.value === `fight` && playerHasChosen) {
    return pcChoice();
  } else if (options.includes(e.target.value)) {
    handlePlayerChoice(e);
  }
}


// Add event listner to see if the button was clicked
buttons.forEach(button => button.addEventListener(`click`, handleButtonClick));

// TODO - Add mute button for sound
// Have muted by default
playBackgroundMusic();