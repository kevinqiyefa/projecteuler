// Multiples of 3 and 5
// Problem 1 

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


//loop thru 1 to 999;
//set a counter and add the num if it is multiples of 3 or 5.
//return the counter

function mul3or5(n){
  let total = 0;
  for(let i = 1; i < n; i++){
    if(i % 3 === 0 || i % 5 === 0){
      total += i;
    }
  }
  
  return total;
}

mul3or5(1000);