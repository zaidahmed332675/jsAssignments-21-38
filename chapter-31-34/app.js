/* 1. Write a program that displays current date and time in
your browser. */

var date = new Date();
document.write(`CURRENT DATE : ${date}`)

/* 2. Write a program that alerts the current month in words.
For example December.
 */

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

var month = date.getMonth();
alert(`CURRENT MONTH : ${monthNames[month]}`)


/* 3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun. */



/* 4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */

if(monthNames[month] === "Saturday" || monthNames[month] === "Sunday" ){
    alert(`IT'S FUN DAY`);
}else{
    alert(`TODAY IS NOT SATURDAY NOR SUNDAY`);
}

/* 5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”. */


if(date < 16){
    alert(`First fifteen days of the month`);
}else{
    alert(`Last days of the month`);
}

/* 6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object. */

alert(`CURRENT DATE : ${date}
ELAPSED MILLISECONDS SINCE JANUARY 1, 1970 : ${date.getTime()}
ELAPSED MINUTES SINCE JANUARY 1, 1970 : ${((date.getTime() / date.getMilliseconds) / date.getSeconds)}`);
    

/* 7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

if(date.getHours() < 12){
    alert(`ITS AM`);
}else{
    alert(`ITS PM`)
}

/* 8. Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate. */

var laterDate = new Date("DECEMBER 31, 2020");
alert(laterDate)


/* 9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */

var lastRamdan = new Date("June 18, 2015");
var thisRamdan = new Date("April 25, 2012");

/* 10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015 */


/* 11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser. */


/* 12. Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back? */



/* 13. Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */




/* 14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
DATE METHODS | JAVASCRIPT
Page 5 of 5
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where, */

document.write(`<h1>K-ELECTRIC BILL</h1>
Customer Name: ZAID BIN AHMED MAKHARISH
Month: ${monthNames[month]}
Number Of Units: 410
Charges per Unit: 16
Net Amount Payable ( within Due Date: ${410 * 16}
Late Payment Surcharge: 350
Gross Amount Payable (after Due Date): ${410 * 16 + 350}`);