"use strict"

let startDate = new Date("July 11, 2022");
let endDate = new Date("November 11, 2022");

let msec_per_day = 1000 * 60 * 60 * 24;

let elapsedMillisec = endDate.getTime() - startDate.getTime();

let dayDiff = elapsedMillisec / msec_per_day;

let numDaysDiff = Math.round(dayDiff); 
console.log("The number of days between two dates is " + numDaysDiff);
