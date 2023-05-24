//input string
//assuming date between 2000-2099
//in format of dd/mm/yyyy
let date = prompt("Enter the input date");
//By WDHD method we are finding day from given date

//Month chart
const month = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
//From century chart (2000-2099)
const century = 6;

let sum = parseInt(date.slice(0, 2));

sum += month[parseInt(date.slice(3, 5)) - 1];
sum += 6;
sum += parseInt(date.slice(8, 10));
sum += parseInt(date.slice(8, 10) / 4);

let day;
if (!sum % 4) {
  day = (sum % 7) - 1;
} else {
  day = sum % 7;
}
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
}

//Now for getting month make an array
const monthNameArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const monthName = monthNameArr[parseInt(date.slice(3, 5)) - 1];
const dateNumber = parseInt(date.slice(0, 2));

//print final output
console.log(
  `Greetings, Today is ${dayName} and it's ${dateNumber}th ${monthName}`
);
