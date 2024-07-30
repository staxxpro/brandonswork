//function examples

function checkAge(age) {
    return (age > 18) ?  true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18)|| confirm('Did your parents allow you?');
}

function getMin(a,b) {
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    }
    return 'They are equal';
}

function min(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function min(a, b) {
    return (a < b) ? a : b;
}

// Write a function pow(x,n) that returns x in power n.
// Or, in other words, multiplies x by itself n times and returns the result.

function pow(x,n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *=x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?",'');

if(n < 1) {
    alert(` Pow $(n) is not supported, use a positive integer.`);
} else {
    alert( pow(x, n) );
}

// diferent qays to reverse a string JS

function reverseString(str){
    let splitString = str.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    return joinArray
}

function reverseString(str){
    return str.split("").reverse.join("")
}

//using a decrementing for loop

function reverseString(str){
    let newString = ""

    for (let i < str.length - 1,i >= 0, i--) {
        newString += str[i]
    }

    return newString
}

// reverse with recursion

function reverseString(str){
    if (str === "") {
        return ""
    } else {
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}

// conditoinal ternary operator

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0)  
}

// different ways to reverse a string python

def reverse_string(x):
    return x[::-1]

//

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
//rewritten using arrow functions in place of the function expressions
// no curly braces needed for the expression, what we will return, unless using a complex multiline expression
function asl(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed.") ,
    () => alert("You canceled the execution.") 
);

// Loops.
// While loops
// Before each loop iteration, the condition in parentheses is evaluated to determine whether it's true or not.
// The code associated with a loop is called its body

let number = 1;
while (number <= 5) {
    console.log(number);
    number++;
}

// For Loop
// Initialization only happens once, when the code first kicks off.
// It's often used to set the initial value of the variable associated to the loop condition.
// The condition is evaluated once before the loop runs each time.
// If it's true, the code runs. If not, the code doesn’t run.
// The final expression is evaluated after the loop runs each time.
// It's often used to update the value of the variable associated with the loop condition, 
// as we saw in the previous example.

for (initialization; condition; final expression) {
    //code to run while the condition is true
}

let number;
for (number = 1; number <=5; number++) {
    console.log(number);
}

for (let i = 1; i <= 5; i++) {
    console.log(i); // OK
  }
  console.log(i); // Error: the i variable is not visible here

// Carousel while and for loop
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// When it's done, improve it so that the number of turns is given by the user.

let i = 1;
while (i <= 10) {
    console.log(`Carousel has spun ${i} times.`)
    i++;
}

for (let i = 1; i <= 10; i++) {
    console.log(`This is spin ${i} on the carousel.`);
}

// allow users to input information example

const name = prompt("Enter your first name:");
alert(`Hello, ${name}`);

// The switch statement kicks off the execution of one code block among many. 
// Only the code block that matches the relevant situation will be executed.

switch (expression) {
    case value1:
      // Code to run when the expression matches value1
      break;
    case value2:
      // Code to run when the expression matches value2
      break;
    // ...
    default:
    // Code to run when neither case matches
  }

// Adding a break; in each block is important so you get out of the switch statement!



const x = "abc";
switch (x) {
    case "abc":
      console.log("x = abc");
    // break omitted: the next block is also run!
    case "def":
      console.log("x = def");
      break;
}

// Create function that takes in a number. Console log all values from 1 to that number
// but if the number is divisible by 3 log "fizz" instead of that number, If the number is
// divisible by 5 log "buzz" instead of that number, and if the number is
// divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++)
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else if(i % 5 === 0) {
            console.log("Buzz");
        }else {
            console.log(i);
        }
}

// Create an array of movies with at least three movies

let newArr = ["Gladiator", "Meet The Browns", "The Office"];
let movie1 = newArr[0];
let movieLength = newArr.length;
newArr[-1];

//Creste an array of movie titles. Loop through the array and add each element to the h2

movieTitles.array.forEach((item, i) => {
    document.querySelector('h2').innerText += item
    
});
 // or

 for(let i = 0; i < movieTitles.length; i++){
    document.querySelector('h2').innerText += movieTitles[i];
 }
//Create an array of numbers. Loop through the array and add three to each number and replace the old number
let nums = [1,2,3]
nums.forEach((item, i) => {
    nums[i] = item + 3;
});

// Find the average of all the numbers from previous array

//
function divideAndMultiply(num1,num2, num3){
    alert(((num1/num2) * num3).toFixed(2));
} // toFixed allows us to dictate the number of digits after the decimal place

// Create a function that takes in 1 number. Console log the cube root of the  number

function cubeRootNum(num) {
    console.log(Math.cbrt(num));
}

//
function multiArray(arr){
    let product = 1;
    arr.forEach((item, i) => {
        product *= item;
    });

    // for(let i = 0; i < arr.length; i++) {
    //  product = product * arr[i];
    // }
}

let bestRappers2020 = ['6ix9ine','PoloG','6ix9ine']
let removed = bestRappers2020.shift() //removes the first element from the array
// since i did the shift at the same time as assignment removed now holds the first element 6ix9ine
console .log(bestRappers2020) // ['PoloG', '6ix9ine']
// .pop() removes the last element from the array
let removeAgain = bestRappers2020.pop() 
console.log(bestRappers2020) // ['PoloG']
// unshift('variable') adds element to the front of the array
// push() adds item to the end of the array
// bestRappers2020.map(x => 'Dylan')  gives you new array with each element replaced with the variable supplied
// bestRappers2020 -- ['Dylan','Dylan','Dylan']
// map() Is similar to the forEach() method runs once for each element and returns a new array

// Create a function that takes in an array of numbers. Return a new array
// containing every even number from the original array

function newArrEven(arr){
    let newArr = [];
    arr.forEach((item, i) => {
        if(item % 2 === 0) {
            newArr.push(item);
        }
    });
    return newArr;
}

// Declare a variable and assign it a string, alert the last three character in the string

function lastThreeChar(str) {
    let newStr = str;
    alert(newStr.slice(-3));
}

// creeate a function that takes in five numbers and subtracts them from 100. Alert the absolute value of diffeerence

function takeFive(num1, num2, num3, num4, num5){
    let difference = 100 - num1 - num2 - num3 - num4 - num5;
    alert(Math.abs(difference));
}

// Create a function that returns heads or tails randomly and as fairly as possible. Call the function
// *Conditionals*
function flipCoin(){
    let randomState = Math.random(); // returns a number between zero and one
    if(randomState < .5) {
        return "heads";
    }else {
        return "tails";
    }

    return Math.random() < .5 ? 'heads' : 'tails';
} // Rock, paper scissors could split the conditions into .33, .66 and anything else other condtiion


// Create a function that takes three numbers. Console log lowest and highest values. Call the function

function lowHighNum(num1, num2, num3){
    console.log(`The lowest is ${Math.min(num1,num2,num3)} and the highest is ${Math.max(num1,num2,num3)}}`)
}

// * Loops* Create a function that takes in a number. Console log the result of heads or tails
// using the previous function x times where x is the number passed into the function. Call the function

function flipTimes(num) {
    for(let i = 1; i <= num; i++) {
        let result = flipCoin();
        console.log(result);
    }
}

// Create an array of number Return new array of numbers that includes every even number from the previous array
let nums = [2,7,118,19,6]
function onlyEvens(arr){
    return arr.filter(num => num % 2 === 0);
} // Filter takes in a function and helps you filter out things that meet that requirement
// Runs once for each element in the array

let onlyEvens = arr => arr.filter(morphinTime => morphinTime % 2 === 0);
console.log(onlyEvens(nums));

// Create a function that takes in an array of numbers
// Alert the sum of the second lowest and the second highest number
function secondLowAndHigh(arr){
    let sorted = arr.sort((a, b) => a-b); // commit to memory how to sort from least to greatest
    // sort(a,b) => b-a is how to sort from highest to lowest
    alert(sorted[1] + sorted[sorted.length - 2]);

}
/* Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side */
let favDrink = "  Pepsi ";
favDrink = favDrink.trim();
/* Declare a variable assign it to a string with multiple words, and check to see if one of the words is apple */
let strWithManyWords = "A car drove down the street";
if (strWithManyWords.search("apple") !== -1) {
    console.log("yes");
} else {
    console.log("no");
};
/* *Functions* Create a function that returns rock, paper, scissors as randomly as possible */
function rockPaperScissors(){
    let randomState = Math.random();
    let result = "";
    if (randomState < .33) {
        return "rock";
    } else if (randomState < .66) {
        return "paper";
    } else {
        return "scissors";
    }
}
/* *Conditionals* Create a function that takes in a choice (rock, paper, scissors) and determines if they won a game of rock paper scissors against a bot using the above function*/
function checkWin(choice){
    let botChoice = rockPaperScissors();
    if ((choice === "rock" && botChoice === "scissors") || (choice === "paper" && botChoice === "rock") || (choice === "scissors" && botChoice === "paper")) {
        console.log(" You won!");
    }else if (choice === botChoice){
        console.log("You tied");
    }else {
        console.log("You lost!");
    }
}
/* **Loops Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each*/
function playGame(arr){
    arr.forEach((choice) => {
        checkWin(choice);
    });
}

// Create an array and sum all the elements in the array

let arr = [3,9,8,4];
alert(arr.reduce((acc,c) => acc + c, 0)) // reduce runs once for every element and reduces it to one value
// takes current value and adds it to the accumulation c and acc respectively
// accumulator, current value, initial value

// Create a function that takes in an array of numbers. Return new array of numbers that is every number squared
let newArr = arr.map(num => num ** 2);
console.log(newArr);

// Create a function that takes a string Print the reverse of that string to the console
function strReverse(str){
    console.log(str.split("").reverse().join(""));
    // split takes str and turns it into array of characters/individual elements
    //reverse is method on array, reverses characters
    //join turns array of characters back into a string
}
//Create a function that takes in a string alert if the string is a palindrome or not
let palindromeCheck = str => str === str.split("").reverse().join("");
// Declare a variable and assign a sentence to it. Print it to the console multiple times
let positiveAff = "You are beautiful.";
console.log(`Again: ${positiveAff.repeat(24)}`);
// Declare a variable assign it an array of letters combine the letters into one word and alert it
let word = ['T','e','s','l','a'];
alert(word.join(''));
// *Functions Create a function that returns rock paper lizard spock or scissors as randomly as possible
function newGame(){
    let random = Math.random();
    if (random < .2){
        return 'rock';
    }else if (random < .4){
        return 'paper';
    }else (random < .6){
        return 'scissors';
    }else if (random < .8){
        return 'lizard';
    }else {
        return 'spock';
    }
};
//*Conditionals Create a function that takes in a choice(r/p/s/l/s/) and determines if they won a game against a bot
// using the function above

function checkGame(choice){
    let botChoice = newGame();
    if ((choice === 'rock' && botChoice === 'scissors') || (choice === 'paper' && botChoice === 'rock') || (choice === 'scissors' && botChoice === 'paper') || (choice === 'spock' && botChoice === 'rock')|| (choice === 'spock' && botChoice === 'scissors') || (choice === 'lizard' && botChoice === 'paper') || (choice === 'lizard' && botChoice === 'spock') || (choice === 'scissors' && botChoice === 'lizard') || (choice === 'paper' && botChoice === 'spock') || (choice === 'rock' && botChoice === 'lizard')){
        console.log('won');
    }else if (choice === botChoice) {
        console.log('tie');
    }else {
        console.log('lose');
    }
};

// Object constructors and classes
function MakeCar(carMake, carModel, carColor,numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function(){
        alert('BEEP BEEP BEEP')
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`)
    }
}

let hondaCivic = new MakeCar('Honda','Civic','Silver',4)
let teslaRoadster = new MakeCar('Tesla','Roadster','Red', 2)
// * Make a character, for Tony Hawk game, with 5 properties and 3 methods
function TonyHawkProSkaterCharacter(chName,skaterAge,skaterSponsor,specialMove,stance){
    this.characterName = chName;
    this.age = skaterAge;
    this.sponsor = skaterSponsor;
    this.specialTrick = specialMove;
    this.stance = stance;

    this.grind = function(){
        alert('5050')
    }
    this.flip = function(){
        alert('Kickflip Underflip')
    }
    this.taunt = function(){
        alert('One more try')
    }

}
// Class based syntax, nothing different just aestetically different to allign with other languages with classes
// They are like tmeplates for Objects, more up to date syntax
class MakeCar{
    constructor(carMake,carModel,carColor,numOfDoors) {
        this.make = carMake;
        this.model = carModel
        this.color = carColor
        this.doors = numOfDoors
    }
    honk(){
        alert('Beep Beep Beep')
    }
    lock(){
        alert(`Locked ${this.doors} doors.`)
    }
}