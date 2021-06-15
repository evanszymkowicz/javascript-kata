//  leetcode 1672

//  You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
//  Return the wealth that the richest customer has.
//  A customer 's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.


//  First solution:
//  with reduce

var maximumWealth = function (accounts) {
        let wealthOfRichestCustomer = 0;
        const sumWealthOfCustomer = arr => {
            return arr.reduce((acc, value) => {
                return acc + value
            }, 0)
        }

        for (let i = 0; i < accounts.length; i++) {
            let sumWealth = sumWealthOfCustomer(accounts[i]);
            wealthOfRichestCustomer = Math.max(wealthOfRichestCustomer, sumWealth);
        }


//  shorter solution:
//  iterate through the accounts (accounts.map)
//  for each account account add up all the numbers in the account (account.reduce)
//  reurn the sums in a new array and then find the max value of the array (Math.max(...))


const maximumWealth = accounts => (
    Math.max(...accounts.map(account => (
        account.reduce((sum, num) => sum += num, 0)
    )))
);