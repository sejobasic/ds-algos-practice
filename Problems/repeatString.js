// Given a string and a number, "repeatString" 
// returns the given string repeated the given number of times.

function repeatString(string, num) {
  var result = ''; // create result str
  for(var i = 0; i < num; i++) { // iterate over given num
    result += string; // add to result repeated string
  }
  return result; // return result string
}
repeatString('string', 2)
