// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion(stranger) {
  console.log(`Hello ${stranger}, what is your name?`)
}

nameQuestion("stranger")
// Added stranger as a parament and and added string interpolation to produce the effect of asking a stranger their name.

// EX 2:
function addThreeNums(firstNum, secondNum, thirdNum) {
  var sum = firstNum + secondNum + thirdNum
  console.log(sum)
}

addThreeNums(1, 2, 3)
addThreeNums(2, 4, 7)

//Added Num to each number to make it more clear what the parameters mean in regards to a sum of numbers. Re-arranged numbers into numerical order. Fixed indentation.


// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

//fixed Func to function so that the function will run and be recognized. Fixed a curly bracket indentation. 


//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  return avg = sum / 2;
}
average(2, 4)
  console.log(`the average of 2 and 4 is: ${(avg)}.`)

  //Fixed a back tick in the console.log to fix the interpolation. Added a return instead of a variable for avg to use that information in the interpolation later. Added something to call the function and provided numbers to fit the equation.
  