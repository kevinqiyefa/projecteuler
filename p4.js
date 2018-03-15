// Largest palindrome product
// Problem 4 
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

//use two loop to loop thru the two 3-digit numbers.
//record the max as the Largest palindrome
//if the product of two 3-digit numbers is larger than max and is palindrome, then update the max
//lastly return the max

function largestPalindromeProduct(n){
  let max = 0;
  for(let i = n; i >= 100; i--){
    for(let j = n; j >= 100; j--){
      let num = i*j;
      if(String(num) === String(num).split("").reverse().join("") && num> max){
        max = num;
      }
      
    }
  }
  return max;
}

largestPalindromeProduct(999);