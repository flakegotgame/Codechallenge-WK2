// check if number is prime
function isPrime(num) {

    
    if (num <= 1) {
      return false;
    }
  
    // Divisibility by 2 and 3 first
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
  
    // Divisibility by odd numbers up to the square root
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
  
    // No divisors no= prime
    return true;
  }
  
  // Extracting prime numbers from an array
  function getPrimeNumbers(array) {
  
    // Use filter to select elements from the array for prime num
    return array.filter(num => isPrime(num));
  }
  
  //Test, Find prime numbers in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));