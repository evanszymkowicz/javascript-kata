//  write a function abbreviateName that accepts param 'name'
//  name is a string that includes two words with a space in between them "John Doe"
//  output: "J.D"

//  split the name into two words
//  take the first char of the word
//  capitalize
//  do it for both words
//  join both words with a "."
//  return the joined characters

//  functional implementation

function abbreviateName(name) {
    return (
        name
        //  split the name into two words
        .split(" ")
        //  take first char of both parts and capitalize them
        .map((part) => part[0].toUpperCase())
        //  join both characters with a dot
        .join(".")
    );
}

console.log(abbreviateName("John Doe"));
//  J.D
console.log(abbreviateName("jon doe"));
//  J.D


// tighter functional implemenatation using regex

const abbreviateName = (nameToAbbreviate) => {
    const letters = /^[A-Za-z]+$/;
    return nameToAbbreviate
        .split(" ")
        .map((partOfName) => (partOfName[0] !== "" ? partOfName.toUpperCase() : ""))
        .filter((name) => name.match(letters))
        .join(".");
};