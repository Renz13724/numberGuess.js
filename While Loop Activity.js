let randomNumber = Math.floor(Math.random(2) * 4) + 1;


let guess;
while (true) {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));

  if (guess === randomNumber) {
    console.log("Too high!");
    break;
  } else if (guess < randomNumber) {
    console.log("Too low!");
  } else if (guess > randomNumber) { 
    console.log("Correct!");
  }
}
