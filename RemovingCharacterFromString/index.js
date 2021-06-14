//  write a function removeExclamationMarksFromEnd that accepts param inputString
//  return a string that contains input string but without the exclamation mark

//  look at the last character
//  if it is a ! remove it 
//  repeat from step one while last character is a !
//  return the result (a string)

//  input: "bee!!"
//  output: "bee"

//  implementation (while loop)

function removeExclamationMarksFromEnd(inputString) {
    let result = inputString;

    //  run this loop while the last character is a `!`
    while (result[result.length - 1] === "!") {
        //  remove the last character (= `1`)
        result = result.slice(0, -1);
    }
    return result;
}

console.log(removeExclamationMarksFromEnd("bee!!"));
// "bee"

console.log(removeExclamationMarksFromEnd("Hey! Bee🧶!"));
// "Hey! Bee🧶!"

//  implementation using regex
function removeExclamationMarksFromEnd(inputString) {
    // use a regex (//)
    // replace one or more exclamation marks (!+) from the end ($) with an empty string ("")
    return inputString.replace(/!+$/, "");
}

console.log(removeExclamationMarksFromEnd("bee!!"));
// "bee"

console.log(removeExclamationMarksFromEnd("Hey! Bee🧶!"));
// "Hey! Bee🧶!"