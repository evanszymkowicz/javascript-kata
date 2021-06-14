//  find letter position in the alphabet
//  convert char to lowercase
//  find the position of the char in alphabet
//  return the desired message with the position


//  implementation using charCodeAt

function positionInAlphabet(myChar) {
    const DIFFERENCE_CHARCODE_AND_LETTERS = 96;
    // Convert the character into lowercase
    const myCharLowercase = myChar.toLowerCase();
    // Find the position of the char in the alphabet
    const position = myCharLowercase.charCodeAt() - DIFFERENCE_CHARCODE_AND_LETTERS;
    // Return the desired message with the position
    return `Position in Alphabet: ${position}`
}

console.log(positionInAlphabet("a"));
// 1 ✅

console.log(positionInAlphabet("Z"));
// 26  ✅