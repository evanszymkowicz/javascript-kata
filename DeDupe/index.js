//  write a function removeDuplicates that accepts param inputArray
//  input and output array

//  loop over every number
//  check if current number has been seen beofre
//  if not save it to the array
//  return the array


//  implementation using a for loop
function removeDuplicates(inputNumbers) {
    //  empty array
    const withoutDuplicates = [];
    //  loop over every number 
    for (const number of inputNumbers) {
        //  check if the number is unique
        //  save it to the results if not previously seen
        if (!withoutDuplicates.includes(number)) {
            withoutDuplicates.push(number);
        }
    }
    //  return result
    return withoutDuplicates;
}

console.log(removeDuplicates([1, 1, 2]));
// [ 1, 2 ] ✅

console.log(removeDuplicates([3, 3, 2, 2, 1]));
// [ 3, 2, 1 ] ✅

//  functional implementation

function removeDuplicates(inputNumbers) {
  return inputNumbers.reduce(
    (accumulated, current) => {
      return accumulated.includes(current)
        ? accumulated // if yes (= already seen), return the old values without changes
        : accumulated.concat(current); // if no (= not seen), return the old values plus the current one
    },
    []
  );
}

console.log(removeDuplicates([1, 1, 2]));
// [ 1, 2 ] ✅

console.log(removeDuplicates([3, 3, 2, 2, 1]));
// [ 3, 2, 1 ] ✅


//  resolved using set
function removeDuplicates(inputNumbers) {
 // we go from array (inputNumbers) to set (new Set()) to array (...)
return [...new Set(inputNumbers)];
}

console.log(removeDuplicates([1, 1, 2]));
// [ 1, 2 ] ✅

console.log(removeDuplicates([3, 3, 2, 2, 1]));
// [ 3, 2, 1 ] ✅