// Given a string, "getStringLength" returns the length of the given string. 
// Do NOT use any native 'length' methods. 
// You might consider using 'substring' or 'slice' as alternatives.

function getStringLength(string) {
  var counter = 0; // create a counter var 
  while(string !== '') { // while string is not empty
    string = string.slice(1);	// slice input string once until string is empty
    counter++; // increment counter
  }
  return counter; // return counter
}
getStringLength('javascript')
