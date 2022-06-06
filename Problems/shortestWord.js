// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array. 
// If there are ties, it should return the first element to appear in the given array. 
// Expect the given array to have values other than strings. 
// If the given array is empty, it should return an empty string. 
// If the given array contains no strings, it should return an empty string.

function findShortestWordAmongMixedElements(arr) {
  if(arr.length === 0) {// If the given array is empty, it should return an empty string.
    return '';
  }
  var stringsOnly = [];
  for(var i = 0; i < arr.length; i++) {	// iterate over given array
    if(typeof arr[i] === 'string') { // check if the current key is a string
      stringsOnly.push(arr[i]); // push into result arr found strings
    }
  }
  if(stringsOnly.length === 0) { // If the given array contains no strings, it should return an empty string.
    return '';
  }
  var shortestStr = stringsOnly[0]; // create shortest var and assign to first string in arr
  for(var i = 0; i < shortestStr.length; i++) {	// iterate over strings arr
    if(stringsOnly[i].length < shortestStr.length) { // check if length of current string is shorter than shortest
      shortestStr = stringsOnly[i]; // if so, reassign shortest to current string
    }
  } return shortestStr; // return shortest string
}
findShortestWordAmongMixedElements(['hello', 'bye', 1, 5])
