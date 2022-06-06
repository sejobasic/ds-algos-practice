// Use an Object to count letters in a word
// Given a string of characters, "countAllCharacters" 
// returns an object where each key is a character in the given string
// with its value being how many times that character appeared in the given string. 
// If given an empty string, your function should return an empty object.

function countAllCharacters(string) {
  if(string.length === 0) {	// edge case
    return { };
  }
  var result = { };
  var splitChars = string.split(''); // split input str into chars
  for(var i = 0; i < splitChars.length; i++) { // iterate over chars
    if(result[splitChars[i]] === undefined) {	// check if char exist in result obj
      result[splitChars[i]] = 1; // if not, give it a value
    } else { // otherwise, if it does exist
      result[splitChars[i]]++; // increment char
    }
  }
  return result;
}
countAllCharacters('this is a string')
