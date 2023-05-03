let date1 = new Date("January 15, 2022");
let date2 = new Date("March 15, 2022");
let msec_per_day = 1000 * 60 * 60 * 24; // the conversion of miliseconds to days
let elapsedMilliseconds = date2.getTime() - date1.getTime(); // the getTime function is in miliseconds
let dayDiff = elapsedMilliseconds / msec_per_day; // You get the msec_per_day so that you can convert the miliseconds subtracted by elepsedmiliseconds into a whole number
let numDays = Math.round(dayDiff);// then round the number you get so it doesnt display with a decimal 
console.log("The number of days between dates is " + numDays);