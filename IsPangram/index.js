//  leetcode 1832. Check if the sentence is a Pangram
//  given a string sentence containing only lowercase English letters return true if Pangram or false otherwise

var checkIfPangram = function(sentence) {
    sentence = sentence.toString();
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let i = 0; i < sentence.length; i++) {
        const character = sentence[i];
        const indexOfCurrentCharacterInAlphabet = alphabet.indexOf(character);
        if (indexOfCurrentCharacterInAlphabet !== -1) {
            alphabet.splice(indexOfCurrentCharacterInAlphabet, 1);
        }
    }
    return alphabet.length === 0;
}
