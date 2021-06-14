//  write a function coinCombo that accepts one param 'cents'
//  Given a number of cents, e.g. 51
// return the minimum number of coins combination of the same value, e.g. [1, 0, 0, 2].

//Find out how many times I need the 25 cents coin
// Find out how many times I need the 10 cents coin
// Find out how many times I need the 5 cents coin
// Find out how many times I need the 1 cents coin
// Return the array with the combination of the coins

//  makes use of 
//  Array
// for of
// while
// indexOf
//     %

function coinCombo(cents) {
    const coinValues = [25, 10, 5, 1];
    //  array for the output filled with zeros
    const coins = Array(coinValues.length).fill(0);
    
    let currentCents = cents;

    //  loop over the coins
    for (const coin of coinValues) {
        //  this will run if there are coins left
        while (currentCents >= coin) {
            //  find out how many cents are left
            const remainder = currentCents % coin;
            //  find how many times the current coins fit into the current cents
            const increaseBy = (currentCents - remainder) / coin;
            currentCents = currentCents % coin;
            const index = coinValues.length - 1 - coinValues.indexOf(coin);
            coins[index] += increaseBy;
        }
    }
    return coins;
}

console.log(coinCombo(51));
// [1, 0, 0, 2] ✅

console.log(coinCombo(26));
// [1, 0, 0, 1] ✅

//  stripped down super functional:
const coinCombo = [25, 10, 5, 1]
    .reduceRight((a, c) => n => [Math.floor(n / c), ...a(n % c)], () => [])