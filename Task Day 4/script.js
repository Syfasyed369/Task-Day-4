// 1.Do the below programs in anonymous function & IIFE

//Print odd numbers in an array
(function() {
    const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    console.log(oddNumbers);
  })();
  
  
  //Convert all the strings to title caps in a string array
  (function() {
    const strings = ["hello", "world", "javascript"];
    const titleCaps = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log(titleCaps);
  })();
  
  
  //Sum of all numbers in an array
  (function() {
    const numbers = [10, 20, 30, 40, 50];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
  })();
  
  
  //Sum of all numbers in an array
  (function() {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const isPrime = num => {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    };
    const primeNumbers = numbers.filter(isPrime);
    console.log(primeNumbers);
  })();
  
  
  //Return all the palindromes in an array
  (function() {
    const words = ["level", "hello", "racecar", "world"];
    const isPalindrome = word => {
      const reversed = word.split("").reverse().join("");
      return word === reversed;
    };
    const palindromes = words.filter(isPalindrome);
    console.log(palindromes);
  })();
  
  
  //Return median of two sorted arrays of the same size.
  (function() {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const mergeArrays = [...arr1, ...arr2].sort((a, b) => a - b);
    const median = (mergeArrays[Math.floor((mergeArrays.length - 1) / 2)] + mergeArrays[Math.ceil((mergeArrays.length - 1) / 2)]) / 2;
    console.log(median);
  })();
  
  
  //Remove duplicates from an array
  (function() {
    const numbers = [10, 20, 20, 30, 40, 40, 50];
    const uniqueNumbers = [...new Set(numbers)];
    console.log(uniqueNumbers);
  })();
  
  
  //Rotate an array by k times
  (function() {
    const array = [1, 2, 3, 4, 5];
    const k = 2;
    for (let i = 0; i < k; i++) {
      const element = array.shift();
      array.push(element);
    }
    console.log(array);
  })();
  
  
  