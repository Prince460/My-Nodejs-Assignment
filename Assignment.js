const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function guessGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  rl.question('Guess a number between 1 and 10 (or type "exit" to quit): ', (userInput) => {
    if (userInput.toLowerCase() === 'exit') {
      console.log('Thank you!');
      rl.close();
    } else {
      const userGuess = parseInt(userInput);

      if (userGuess === randomNumber) {
        console.log('Weldone! You guessed the correct number.');
      } else {
        console.log(`Sorry! You guessed wrong. The random number was ${randomNumber}.`);
      }

      guessGame(); 
    }
  });
}

guessGame();