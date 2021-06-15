//  input: candies, extraCadies
//  return array

var kidsWithCandies = function(candies, extraCandies) {
    const MAX = Math.max(...candies); //  find the child with the greatest No. of candies
    let result = []; // new empty array for results
   
        for (let i = 0; i < candies.length; i++) { // start looking by looping through candies[] 
            if (candies[i] + extraCandies < MAX) { //if candies[i]+extraCandies<MAX 
                result[i] = false; //  report false in result[] at index i 
            }
            else {  //  else return true
                result[i]=true;
            }
        }
        return result;
}

//TESTS
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
//expected: [true,true,true,false,true]

//console.log(kidsWithCandies([4,2,1,1,2],1)); 
//expected: [true,false,false,false,false] 

//console.log(kidsWithCandies([12,1,12],1)); 
//expected: [true,false,true]