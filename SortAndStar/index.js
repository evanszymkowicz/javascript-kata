//  write a function sortAndStar that accepts one param stringArray
//  accepts an array of words 
//  sort it alphabetically and return the first string of the sorted array with all characters seperated by *** between each other
//  Sort the array (case-sensitive)
// Take the first array element
// Put ** * between each char

//  sort
//  split
//  join

function sortAndStar(stringArray) {
    const sorted = stringArray.sort();
    return sorted[0]    // grab the first element
        .split("")
        .join("***");
}

console.log(sortAndStar(["We", "solve", "Katas"]));
// "K***a***t***a***s" ✅


//  functional refactor
// const sorted = (array) => array.slice().sort();
// const starred = (string) => string.split('').join('***');
// const sortedAndStarred = (array) => starred(sorted(array)[0]);