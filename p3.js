// Largest prime factor
// Problem 3 
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


//loop thru 2 to 60085147513
//check if the num is devided by 600851475143
//if yes then insert the num into an array call arr.
//multiply all the nums in arr, return the arr if the result === 600851475143.
//return the last index num.

function largestPrimeFactor(n){
  let arr = [];
  for(let i = 2; i < n; i++){
    if (n%i===0){
      arr.push(i);
      if(arr.reduce((x,y)=>x*y)===n){
        break;
      }
    }
  }
  
  return arr[arr.length-1];
}

largestPrimeFactor(600851475143);