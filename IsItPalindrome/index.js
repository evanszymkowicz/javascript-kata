//  function isPalindrome that accepts one param myString
//  output is a boolean

// Input: "Abba"
// Transform the input string to lowercase: "abba"
// Get the backward version of the lowercase string: "abba"
// Check
// if the forward string is the same as the backward string: true
// Output: true✅

//  makes good use of 
// toLowerCase
// split
// reverse
// join

function isPalindrome(myString) {
    //  use built-in method to transform the input string to lowercase
    const lowercaseInput = myString.toLowerCase();
    //  to have a similar wording
    const forward = lowercaseInput;
    // get the backward version of the lowercase string
    const backward = lowercaseInput.split("").reverse().join("");
    // check if the forward string is the same as the backward string
    return forward === backward;
}

    console.log(isPalindrome("Abba"));
    // true ✅

    console.log(isPalindrome("hello"));
    // false ✅