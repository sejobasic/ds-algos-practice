// Complete the function ‘splitPairs’ such that it splits 
// the input string into pairs of characters. 
// If the input string has a length that is odd, 
// then it should replace the missing second character 
// of the final pair with an underscore _. 
// an empty string should make your function produce an empty array.

function splitPairs(input) {
  if(input.length === 0) { // edge case
    return [ ];
  } if(input.length % 2 === 1) { // check if input string’s length is odd
    input += '_';	// if so, add an underscore to input string
  }
  var pairs = []; // create empty pair array 
  for (var i = 0; i < input.length; i += 2) {	// iterate over input string by 2
    pairs.push(input[i] + input[i+1])	// push input at index + input at index plus 1 into result arr
  }
  return pairs -1; // return pair array
}
splitPairs('harry')