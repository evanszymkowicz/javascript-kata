//  write a function repeatIt that accepts two params, inputString and repetitions
//  given the string "Hi" and number of repetitions 2, return a string repeating the word the number of times

//  check if it is a string
//  if yes repeat X times

//  makes use of typeof, repeat and for

//  native implementation

function repeatIt(inputString, repetitions) {
    //  check if it is a string
    if (typeof inputString !=="string") {
        return "Not a string!"
    }
    //  repeat it x times
    return inputString.repeat(repetitions);
}

console.log(repeatIt("Hi", 2));
// "HiHi" ✅

console.log(repeatIt(999, 1));
// "Not a string" ✅

//  implementation using a for loop

function repeatIt(inputString, repetitions) {
    //  check if is a string
    if(typeof inputString !== "string"){
        return "Not a string";
    }
    //  empty variable for result
    let result = "";
    //  repeat it x times
    for(let i = 0; i < repetitions; i++) {
        //  add it to the result
        result += inputString
    }

    return result;
}

console.log(repeatIt("Hi", 2));
// "HiHi" ✅

console.log(repeatIt(999, 1));
// "Not a string" ✅