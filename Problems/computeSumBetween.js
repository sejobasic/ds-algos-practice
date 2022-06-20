// Given 2 integers, "computeSumBetween" returns the sum between the two given integers
// beginning at num1, and excluding num2.
// The sum between 1 and 4 is 1 + 2 + 3 = 6
// If num2 is not greater than num1, it should return 0

function computeSumBetween(num1, num2) {
  if(num2 <= num1) { // If num2 is not greater than num1, it should return 0.			
    return 0;			
  } 
  var sum = 0; // create sum result
  for(var i = num1; i < num2; i++) { // iterate starting at num1 up to num2
    sum += i; // add to sum value of current index
  }
  return sum;			
}
computeSumBetween(2, 7)
