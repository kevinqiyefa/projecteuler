// Even Fibonacci numbers
// Problem 2 
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.



//initial a Sum for even-valued terms 
//set an infinity loop to create a Fibonacci sequence list.
//check if the terms is less than 4000000.
//if yes, then check if the term is even or not.
//if yes, then add the even term into the sum.
//else return the sum.

function evenFibSum(n){
  let first = 0, second = 1, sum = 0;
  let newTern;
  
  while(true){
    newTern = first + second;
    if(newTern > n){
      return sum;
    } else if(newTern % 2 ===0){
      sum += newTern;
    }
    
    first = second;
    second = newTern;
  }
}

evenFibSum(4000000);