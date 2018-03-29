// Smallest multiple
// Problem 5 

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?



function smallestMultiple(from, to){
  var n = 1;
  for(var i=from; i<=to; i++){
    n = lcm(n, i);
  }
  return n; 
}

function gcd(a, b) { // Greatest common divisor
  if(b === 0) return a;
  return gcd(b, a%b);
}
function lcm(a, b) { // Least common multiple
  return a * b / gcd(a, b);
}


smallestMultiple(1, 20);
