//  write a function getStatusOfWellOfIdeas that accepts param inputArray
//  given the array of strings return a message string of the status of the well of ideas.

//  loop over every array element
//  check if the current element is 'good'
//  if yes (=good) increase the counter of 'good's
//  return the result string depending on the counter

// Input: ["bad", "good", "bad"]
// Iteration 1: "bad" is "good"? => No => not increase counter => 0
// Iteration 2: "good" is "good"? => Yes => increase counter => 1
// Iteration 3: "bad" is "good"? => No => not increase counter => 1
// Output: "Publish!" (because 1 good) ✅


//  makes use of for of
//  ternary operator
//  fiter

function getStatusOfWellOfIdeas(inputArray) {
    let goodCounter = 0;

    for (const idea of inputArray) {
        if (idea === "good") {
            goodCounter += 1;
        }
    }

    return goodCounter === 0
    ? "Fail!"
    : goodCounter > 2
        ? "I smell a series!"
        : "Publish!";
}

console.log(getStatusOfWellOfIdeas(["bad", "good", "bad"]));
// "Publish!" ✅

//  functional implementation

function getStatusOfWellOfIdeas(inputArray) {
  const goodCounter = inputArray.filter((idea) => idea === "good").length;

  return goodCounter === 0
    ? "Fail!"
    : goodCounter > 2
      ? "I smell a series!"
      : "Publish!";
}

console.log(getStatusOfWellOfIdeas(["bad", "good", "bad"]));
// "Publish!" ✅