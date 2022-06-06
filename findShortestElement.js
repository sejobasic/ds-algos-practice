// Given an array, "findShortestElement" returns the shortest string within the given array.
// If there are ties, it should return the first element to appear. 
// If the given array is empty, it should return an empty string.

function findShortestElement(arr) {
  if(arr.length === 0) { // edge case
    return '';
  }
  var shortestStr = arr[0];	// create shortest variable & assign to input arr’s first element
  for(var i = 0; i < arr.length; i++) {	 // iterate over input arr
    if(arr[i].length < shortestStr.length) { // check if current element is shorter than declared shortest
      shortestStr = arr[i]; // if so, reassign shortest to current element at index
    } 
  }
  return shortestStr; // return shortest string
}
findShortestElement(['blue', 'red', 'green', 'yellow'])
