//  write a function calculateAmountOfPoints that accepts one param 'games', a valid array of strings 
//  the function should return a number: the sum of the points of every single game.

//  input an array of strings
//  output: number

// loop over every element of the games array
// calculate the specific score of this element
// return the sum of every single element(a number)

//  for of loop implementation

function calculateAmountOfPoints(games) {
    // counter for total points
    let totalPoints = 0;
    
    //  for every game in the set of games
    for (const game of games) {
        //  split the score for both teams and assign to two variables
        cosnt [scoreA, ScoreB] = game.split(":");
        //  calculate the points for this game with a tenery operator
        const points = scoreA > scoreB ? 3 : scoreA === scoreB ? 1 : 0;
        //  add the points for this specific game to the total points
        totalPoints += points;
    }
    return totalPoints;
}

console.log(calculateAmountOfPoints(["3:1", "2:2"]));
// 4

console.log(calculateAmountOfPoints(["1:0", "2:0", "3:0", "4:0", "2:1"]));
// 15


//  functional implementation

function calculateAmountOfPoints(games) {
    return (
        games
        //  split the game score into two seperate values
        .map((game) => game.split(":"))
        //  calculate the points for this game with a ternary operator
        .map((score) => score[0] > score[1] ? 3 : score[0] === score[1] ? 1 : 0))
        // calculate the sum of all games
        .reduce((acc, cur) => acc + cur, 0)
    );
}

console.log(calculateAmountOfPoints(["3:1", "2:2"]));
// 4

console.log(calculateAmountOfPoints(["1:0", "2:0", "3:0", "4:0", "2:1"]));
// 15