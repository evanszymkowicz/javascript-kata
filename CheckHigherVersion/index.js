//  a function findOddDigits that accepts two parameters: number n and number k
//  given n e.g. 123456789111, and k, e.g. 5, return the first k odd digits in n, e.g. 13579.

//  In the following cases the function should return 0:

// there are no odd digits in n;
// k is bigger than n;
// k is 0;
// k is bigger than the number of odd digits in n.

function findOddDigits(n, k) {
    //  k = 0;
    //  k is bigger than a number of digits in n;
    if ( k === 0 || k > n) return 0;
    // find all odd digits
    const str = String(n);
    const split = str.split("");
    const odds = split.filter((num) => num % 2);
    // there are no odd digits in a number n;
    // k is bigger than a number of odd digits in n.
    if (!odds.length || k > odds.length) return 0;
    // find the first `k` digits
    const joined = odds.join("");
    const sliced = joined.slice(0, k);
    // return the number
    return Number(sliced);
    }

    console.log(findOddDigits(123456789111, 5));
    // 13579 ✅

    console.log(findOddDigits(0, 100));
    // 0 ✅