/* 1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name. */

var  userFirstName = prompt("ENTER YOUR FIRST NAME")
var  userLastName  = prompt("ENTER YOUR LAST NAME")

var fullName = userFirstName +" "+ userLastName;
alert(`WELCOME TO MY SITE ${fullName}`)

/* 2. Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser
 */

var mobileModel  = prompt("ENTER YOUR FAVOURITE MOBILE MODEL");
alert(`MY FAVOURITE PHONE IS : ${mobileModel}
LENGTH OF STRING IS : ${mobileModel.length}
`);


/* 3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser */

var  country  = "PAKISTAN"
var indexOfN = country.indexOf("N");
alert(`STRING : ${country}
INDEX OF N : ${indexOfN}
`)

/* 4. Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser. */

var  helloString  = "HELLO WORLD"
var lastIndexOfN = helloString.lastIndexOf("L");
alert(`STRING : ${helloString}
LAST INDEX OF L : ${lastIndexOfN}
`)


/* 5. Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.  */


var  pakistani  = "PAKISTANI"
var characterAtIndex = pakistani.charAt(3);
alert(`STRING : ${pakistani}
CHARACTER AT INDEX 3 : ${characterAtIndex}
`)



/* 6. Repeat Q1 using string concat() method. */

var  firstName = prompt("ENTER YOUR FIRST NAME")
var  lastName  = prompt("ENTER YOUR LAST NAME")

var fullName = firstName.concat(lastName)

alert(`WELCOME TO MY SITE ${fullName}`)


/* 7. Write a program to replace the “Hyder” to “Islam” in the word 
“Hyderabad” and display the result in your browser. */

var word = "HYDERABAD";
var replacingPart = word.replace("HYDER", "ISLAM");
alert(`CITY : ${word}
AFTER REPLACEMENT : ${replacingPart}
`)


/* 8. Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”; */

var passage = "Ali and Sami are best friends. They play cricket and football together.";
var replacingAnd = passage.replace(/blue/gi, "&");
alert(`PASSAGE BEFORE REPLACE : ${passage}
PASSAGE AFTER REPLACEMENT : ${replacingAnd}
`)


/* 9. Write a program that converts a string “472” to a number
472. Display the values & types in your browser. */ 


var numberInString = "472"
var stringInNumber = +"472"

alert(`VALUE : ${numberInString}
TYPE : ${typeof numberInString}
VALUE ${stringInNumber}
TYPE : ${typeof stringInNumber}
`)


/* 10. Write a program that takes user input. Convert and
show the input in capital letters. */


var userInput = prompt("ENTER COUNTRY NAME IN SMALL LETTERS");
var userInputCaps = userInput.toUpperCase()
alert(`USER INPUT : ${userInput}
USER INPUT UPPER CASE : ${userInputCaps}
`)


/* 11. Write a program that takes user input. Convert and
show the input in title case.
 */

var userInput = prompt("ENTER COUNTRY NAME IN SMALL LETTERS");
var userInputTitleCase = userInput.toLocaleUpperCase();
alert(`USER INPUT : ${userInput}
USER INPUT TITLE CASE : ${userInputTitleCase}
`)



/* 12. write a program that converts the variable num to string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser */


var stringInNumber = 35.36
var numberInString = stringInNumber.toString().replace(".","");
alert(`Number : ${stringInNumber}
RESULT : ${numberInString}
`)


/* 13. Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ . */



// YE LAZMI KARNA HE



/* 14.You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example: */


var foodArray = ["cake","apple pie","cookie","chips","patties"];
var userWish = prompt(`I HAVE SO MANY ITEMS IN MY BAKERY WAHT DO YOU WANT?`).toLowerCase();
var Result = userWish.indexOf(userWish);

if(Result != 0){
    alert(`{HEY HERE IS YOUR ${userWish}} I HAVE FOUND IT AT SHELF ${Result}`)
}else{
    alert(`{HEY SORRY BUT I DONT HAVE ${userWish}}`)
}

/* 15. Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document. */


/* 16. Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser */

var university = "UNIVERSITY OF KARACHI"
var universityInArray = university.split("");

universityInArray.forEach((elememts)=>{
    document.write(`${elememts}<br>`);
})

/* 17. Write a program to display the last character of a user input. */

var input = prompt("ENTRY ANY THING YOU WANt");
var lastIndexChar = input.slice(-1);

alert(`USER INPUT : ${input}
LAST CHARACTER OF INPUT : ${lastIndexChar}
`)


/* 18. You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string */ 

var input = "the quick brown fox the jumps over the lazy dog";
var countOccur = (input.match(/the/g)).length;

alert(`TEXT : ${input}
THERE ARE ${countOccur} OF WORD the`);