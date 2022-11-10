// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting(name) {
    console.log(`Hello, how are you doing ${name}?`)
}
printGreeting("Trey")
printGreeting("Kelly")
printGreeting("Bryan")

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function friendlyGesture(gesture) {
    console.log(`*${gesture}*`)
}
friendlyGesture("Wave")

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function companyMinMax(company, num1, num2){
    console.log(`The pay range at ${company} is ${num1 - num2}`)    
}

companyMinMax("Walmart", 110000, 90000)




// 4: Write a function that satifies the following interaction pattern:

function checkStock(stock, item) {
    if (stock === 0) {
    console.log(`${item} - Out of stock!`) 
    } else if (stock < 4) {
    console.log(`${item} - running LOW`)
    } else {
      console.log(`${item} is stocked`)
    }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");

// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"