//  write a function everyPossibleSum that accepts one parameter myNumber

// Get the single digits of the input number
// Go to the first digit and find all sums with each next digit, starting from the second
// Go to the second digit and find all sums with each next digit, starting from the third
// Do this for every digit
// Return the array with each sum in it

//  makes use of 
// String
// split
// map
// for

function everyPossibleSum(myNumber) {
    //  split up number into its digits
    //  convert it to a string
    const split = String(myNumber)
        //  split it
        .split("")
        //  convert each split char to a number
        .map((digit) => Number(digit));
    
        const sums = [];

        //  for the first number: iterate from the first to the last number
        for (let first = 0; first < split.length; first++) {
            //  then, for the second number we iterate from the next number after the current first number to last number
            for (let second = first +1; second < split.length; second++) {
                //  save the sum in the sums array
                sums.push(split[first] +split[second]);
            }
        }
        return sums;
}

console.log(everyPossibleSum(1234));
// [ 3, 4, 5, 5, 6, 7 ] ✅

console.log(everyPossibleSum(81596));
// [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ] ✅