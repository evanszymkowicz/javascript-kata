//  write a function countAmountOfEachCharacter that accepts one param 'inputString'
//  return an object returnObject that has a key for every character that exists at least once in the string

//  input to output:
//  loop over the input string
//  if the character is new add it to the object with a count of 1
//  if the character has been seen before increase its count by 1
//  return the object with every key-value pair


//  for loop implementation
function countAmountOfEachCharacter(inputString) {
    const returnObject = {};

    //  loop over the input string
    for (let i = 0; i< inputString.length; i++) {
        //  check if the character has been seen before (if it already has an id)
        if (returnObject.hasOwnProperty(inputString[i])) {
            //  increase its count by 1
            returnObject[inputString[i]] += 1;
        }   else {
            //  add it to the object with a count of 1
            returnObject[inputString[i]] += 1;
        }
    }
    return returnObject;
}

//  result
console.log(countAmountOfEachCharacter("bee"));
// { b: 1, e: 2 }

console.log(countAmountOfEachCharacter("mississippi"));
// { m: 1, i: 4, s: 4, p: 2 }


//  implementation using for of loop

function countAmountOfEachCharacter(inputString) {
    const returnObject = {};

    //  loop over input string
    for (const character of inputString) {
        //  check if the character has been seen before (if it already has an id)
        if (returnObject.hasOwnProperty(character)) {
            //  increase its count by 1
            returnObject[character] += 1;
        } else {
            //  add it to the object with a count of 1
            returnObject[character] = 1;
        }
    }
    return returnObject;
}

console.log(countAmountOfEachCharacter("bee"));
// { b: 1, e: 2 }

console.log(countAmountOfEachCharacter("mississippi"));
// { m: 1, i: 4, s: 4, p: 2 }


//  functional implementation

function countAmountOfEachCharacter(inputString) {
    //  convert the string to an array using reduce method
    return [...inputString].reduce(
        (accumulated, currentChar) => {
            //  check if character has been seen before
            accumulated.hasOwnProperty(currentChar)
        ? { ...accumulated, [currentChar]: accumulated[currentChar] + 1 } // increase its count by 1
        : { ...accumulated, [currentChar]: 1 }, // add it to the object with a count of 1
        // start with an empty object
        {} 
  );
}

console.log(countAmountOfEachCharacter("bee"));
// { b: 1, e: 2 }

console.log(countAmountOfEachCharacter("mississippi"));
// { m: 1, i: 4, s: 4, p: 2 }