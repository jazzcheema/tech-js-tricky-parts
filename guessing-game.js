// math.random for 0-99 number
//new game -> ^ new random number (outer)


//game tells you -> too high, too low, *correct (game ends)


function guessingGame() {

  let answerNumber = Math.floor(Math.random() * 100);
  let gameOver = false;
  let count = 0;

  return function game(guess){
    if(gameOver){
      return "The game is over, you already won!"
    }
    if(guess === answerNumber){
      count += 1
      gameOver = true;
      return `You win! You found ${answerNumber} in ${count} guesses.`
    }
    if(guess > answerNumber){
      count += 1
      return `${guess} is too high!`
    }else{
      count += 1
      return `${guess} is too low!`
    }
  }
}

module.exports = { guessingGame };
