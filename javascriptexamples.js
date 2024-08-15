/* For example, take 153 (3 digits), which is narcissistic:
 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153  ADD TO CODING EXAMPLES FILE FOR GITHUB*/

function narcissistic(value) {
    // Code me to return true or false
    let numberStr = value.toString();
    let sumOf = 0;
    numberStr.split('').forEach(digit => {
        sumOf += Math.pow(digit, numberStr.length)
    });
    return sumOf === value
  }

/* Create Chessboard ADD TO CODING EXAMPLES FILE FOR GITHUB */

const size = 8; //this is the variable setting

let board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

// *Functions Create a function that returns rock paper lizard spock or scissors as randomly as possible
function newGame(){
    let random = Math.random();
    if (random < .2){
        return 'rock';
    }else if (random < .4){
        return 'paper';
    }else if (random < .6){
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

// Create function that takes in a number. Console log all values from 1 to that number
// but if the number is divisible by 3 log "fizz" instead of that number, If the number is
// divisible by 5 log "buzz" instead of that number, and if the number is
// divisible by 3 and 5 log "fizzbuzz" instead of that number
// ADD TO CODING EXAMPLE FILE FOR GITHUB

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
        };
}

const MORSE_CODE = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
};

function decodeMorseCode(morseCode) {
    return morseCode
             .split('   ') // get every word , splits words by characters that are three spaces apart
             .map(word => word
                           .split(' ') // get character code, one space apart
                           .map(character => MORSE_CODE[character]) // decode character
                           /* now you have an array that contain sub arrays which every one represent a word (in morse code of course). */
                           .join('') // join characters to word
              )
              .join(' ') // add spaces between words 
              .trim()
}

