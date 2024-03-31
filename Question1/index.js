// Function to swapcase using input as string
function swapCase(inputString) {

    // Split the input string into an array 
    const characters = inputString.split('');
  
    // Using the map method over each character and swap its case:
    const swappedChars = characters.map(char => {
  
      // Check if the character is uppercase:
      if (char === char.toUpperCase()) {
        // If it's uppercase, convert it to lowercase using toLowerCase()
        return char.toLowerCase();
      } else {
        // If it's lowercase, convert it to uppercase using toUpperCase()
        return char.toUpperCase();
      }
    });
  
    // Make array of swapped characters a single string:
    const swappedString = swappedChars.join('');
  
    // Return final string with swapped cases:
    return swappedString;
  }
  
  // Test: Call the swapCase function with the string "The Quick Brown Fox"
  // Print the result to the console:
  console.log(swapCase('The Quick Brown Fox'));