// Use an Object to count words in a sentence
// Given a string (words separated by spaces).
// "countWords" returns an object where each key 
// is a word in the given string, with its value being
// how many times that word appeared in the given string. 
// If given an empty string, your function should return an empty object.

function countWords(stringOfWords) {
 if(stringOfWords.length === 0) {	// edge case	
    return { };
  }
  var result = { };
  var newWords = stringOfWords.split('  '); // split input str into array of words (space inside “ “)
  for(var i = 0; i < newWords.length; i++) { // iterate over splitted words
    if(result[newWords[i]] === undefined) { // now start adding keys in the result obj…
      result[newWords[i]] = 1; // if current word isn't in the obj, add it by giving it a value
    } else {
      result[newWords[i]]++; // increment current word
    }
  }
  return result;
}
countWords('hello welcome home')
