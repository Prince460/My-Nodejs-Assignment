const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

rl.question('Guess a number between 1 and 10: ', (userInput) => {
  const userGuess = parseInt(userInput);

  if (userGuess === randomNumber) {
    console.log('You have won!');
  } else {
    console.log(`You have lost! The random number generated is ${randomNumber}.`);
  }

  rl.close();
});
