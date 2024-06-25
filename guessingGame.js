console.log('Welcome to Guessing Game');
console.log('Guess a number between 1 and 10 to win the game.');

// Generate a random number between 1 and 10
const randomNum = Math.floor(Math.random() * 10) + 1;
        let guess = null;

        while (guess !== randomNum) {
            guess = parseInt(prompt('Guess a number between 1 and 10: '));

            // Check if the guess is within the allowed range
            if (guess < 1 || guess > 10) {
                console.log('Please enter a number within the range 1 to 10.');
                continue; 
            }
            // Check if the guess is correct
            if (guess === randomNum) {
                console.log(`Congratulations! You guessed the correct number ${randomNum}`);
                break; // Break the loop when the correct number is guessed
            } else if (guess < randomNum) {
                console.log('Too low! Try again.');
            } else {
                console.log('Too high! Try again.');
            }
        }