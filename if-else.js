//if-else statement
let age = 20;
if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible for Voting");
}

//if-else if-else ladder
let marks = 82;
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

//Ternary Operator
let number1 = 10;
let number2 = 20;
let max = (number1 > number2) ? number1 : number2;
console.log("Maximum number is:", max);

//if-else
let number=7;
if(number%2==0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}

//switch case
let day;
let date = new Date().getDay();
switch (date) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log(day);