let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generates a random target number between 0-9
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

//calculates distance between two values
const getAbsoluteDistance = (value1, value2) => {
  Math.abs(value1 - value2);
};


//compares distance between guesses and target number using getAbsoluteDistance function
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanGuessDistance = getAbsoluteDistance(humanGuess, targetNumber);
  const computerGuessDistance = getAbsoluteDistance(computerGuess, targetNumber)
    if (humanGuessDistance <= computerGuessDistance) {
   return true;
    }
    else {
    return false;
    }
    };

//increases score of winner
const updateScore = winner => {
  if (winner === 'human') {
   humanScore++;
  }
  else if (winner === 'computer') {
    computerScore++;
  }
};

//increases round number
const advanceRound = () => currentRoundNumber++;