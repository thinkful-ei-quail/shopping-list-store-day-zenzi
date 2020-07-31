// Collect input from a user
const inputHigh = prompt('Please provide a number');

// Convert the input to a number
const highNumber = parseInt(inputHigh);


if (highNumber) {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor( Math.random() * highNumber ) + 1;
  
  // Create a message displaying the random number
  console.log(`${randomNumber} is a random number between 1 and ${highNumber}.`);
} else {
  console.log('You need to provide a number. Try again.');
}





