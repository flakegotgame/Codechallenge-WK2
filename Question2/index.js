// Function to give an array of numbers between starting and ending value
function generateArray(start, end) {

    // Empty array to store the generated numbers
    let array = [];
  
    // Check if the starting value is less than or equal to the ending value
    if (start <= end) {
      // If yes, set ascending order
      for (let i = start; i <= end; i++) {
        // Push each number from start to end into the array
        array.push(i);
      }
    } else {
      // If not, put in descending order
      for (let i = start; i >= end; i--) {
        // Push each number from start to end in descending order
        array.push(i);
      }
    }
  
    // Return array containing the numbers
    return array;
  }
  
  // Test: Print the array for start=4 and end=7
  console.log(generateArray(4, 7)); // Output: [4, 5, 6, 7]
  
  // Test: Print the array for start=-4 and end=7
  console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6 , 7]