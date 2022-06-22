// Write a function called “keyOfObjectValue”. 
// This function will iterate over the object's values 
// and attempt to locate the target value. 
// If the value is found, the function should return the name of the key 
// where the value in question is located . 
// if not found, the function should return -1.

function keyOfObjectValue(object, target) {
  for(var key in object) { // iterate over input obj
    var value = object[key]; // create and assign value to obj at key
    if (value === target) {	// check if value === target value
      return key; // if so, return the key assigned to the target value
     }
    }   return -1; // or function should return -1;
  }
  keyOfObjectValue({houses: 1}, 1)
