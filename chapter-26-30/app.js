/* 1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

var number = +prompt("ENTER A POSITIVE INTEGER");
alert(`NUMBER : ${number} 
ROUND OF VALUE : ${Math.round(number)}
FLOOR VALUE ${Math.floor(number)}
CEIL VALUE : ${Math.ceil(number)}
`)

/* 2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
 */

var numberNegative = +prompt("ENTER A POSITIVE INTEGER");
alert(`NUMBER : ${numberNegative} 
ROUND OF VALUE : ${Math.round(numberNegative)}
FLOOR VALUE ${Math.floor(numberNegative)}
CEIL VALUE : ${Math.ceil(numberNegative)}
`)


/* 3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

var number = +prompt("ENTER A POSITIVE INTEGER");
alert(`THE ABSOLUTE VALUE OF 4 IS : ${Math.abs(number)}`)

/* 4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.: */

var randomDice = Math.floor((Math.random() * 6) + 1);

document.write(`RANDOM DICE VALUE BETWEEN 1 - 6 : ${randomDice}<br>`)
randomDice = Math.floor((Math.random()) + 1);
document.write(`RANDOM DICE VALUE BETWEEN 1 - 6 : ${randomDice}`)


/* 5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your browser  */


var randomDice = Math.floor((Math.random() * 2) + 1);
document.write(`RANDOM COIN VALUE : ${randomDice} MEANS HEADS<br>`)
randomDice = Math.floor((Math.random()) + 1);
document.write(`RANDOM COIN VALUE : ${randomDice} MEANS TAILS`)


/* 6. Write a program that shows a random number between 1
and 100 in your browser. */

var randomNum = Math.floor((Math.random() * 100) + 10);
document.write(`RANDOM NUMBER BETWEEN 1 AND 100 : ${randomNum}`)

/* 7. Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms
 */



/* 8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user. */

var secretNumber = Math.floor((Math.random() * 10) + 1);
var getSecret = +prompt("ENTER A SECRET NUMBER BETWEEN 1 - 10");
if(secretNumber === getSecret){
    document.write(`CONGRATULATION! YOU GUESS THE RIGHT NUMBER : ${getSecret}`)    
}else{
    document.write(`OH SORRY FOR YOUR BAD LUCK .. TRY AGAIN! YOU GUESS THE RIGHT NUMBER : ${getSecret}`)    
}