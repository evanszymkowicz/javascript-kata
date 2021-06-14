//  brute force
//  write a function splitOddAndEven that accepts one paramter: numbers (an array of positive numbers)
//  return an object with two arrays in it, one for odd one for even numbers

//  loop the input array
//  if number is odd save it in variable odd
//  if number is even save it in variable ven
//  return odd and even in an object

function splitOddAndEven(numbers) {
    let odd = [];
    let even = [];

    for (let i =0; i < numbers.legth; i++) {
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i]);
        } else {
            odd.push(numbers[i]);
        }
    }
    const returnObject = {
        odd,
        even,
    };

    return returnObject;
}


//  implementation with a for of loop

function splitOddAndEven(numbers) {
    let odd = [];
    let even = [];

    for (const number of numbers) {
        if (number % 2 === 0) {
            even.push(number);
        } else {
            odd.push(number);
        }
    }

    const returnObject = {
        odd,
        even,
    };

    const returnObject;
}


//  implementation with functional programming

function splitOddAndEven(numbers) {
    const odd = numbers.filter((number) => number % 2 === 1);
    const even = numbers.filter((number) => number % 2 === 0);

    const returnObject = {
        odd,
        even,
    };

    returnObject;
}

//  ORRRRRR!

function splitOddandEven(numbers) {
    const splitNumbers => {
        const oddsAndEvens = { odds: [], evens: [] };

        numbers.forEach(number => {
            oddsAndEvens[number % 2 === 0 ? 'evens' : 'odds']
            .push(number);
        });

        return oddsAndEvens;
    }
}