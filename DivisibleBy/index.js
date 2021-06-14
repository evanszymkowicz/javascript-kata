 // write a function divisibleBy that accepts two params: numbers and divisor
 // e.g. [1,2,3,4,5,6]  2.
 // return all numbers divisibe by the giben divisor, e.g. [2,4,6]

 // input: numbers array and a number
 // output: numbers array

 // loop over every number
 // check if current number is divisible by divisor
 // if yes save into results variable
 // return the results

 // implementation using a for loop

 function divisibleBy(numbers, divisor) {
    //  create a variable for results
    const result = [];
    //  loop over numbers
    for (const n of numbers) {
        //  check if current number is divisible by divisor
        if (n % divisor === 0) {
            //  if yes save it into results variable
            result.push(n);
        }
    }
    //  return results
    return result;
 }

 console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
 // [ 2, 4, 6 ] ✅

 console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
 // [ 3, 6 ] ✅


 // implementation using functional programming

 function divisibleBy(numbers, divisor) {
     // return each number that is divisible by the divisor
     return numbers.filter((n) => n % divisor === 0);
 }

 console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
 // [ 2, 4, 6 ] ✅

 console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
 // [ 3, 6 ] ✅