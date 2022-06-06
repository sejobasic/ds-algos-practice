// Given a number, "computeSummationToN" returns the sum of sequential numbers 
// leading up to the given number, beginning at 0.
// If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

function computeSummationToN(n) {
  var sum = 0; // create sum var
  for(var i = 0; i <= n; i++) {	// iterate from 0 up to given num
    sum += i; // add to sum value of current index
  }
  return sum;
}
computeSummationToN(10)
