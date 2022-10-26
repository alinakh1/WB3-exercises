"use strict"

let currentDate = new Date();

//console.log(currentDate.toDateString());
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Saturday",];
let dayName = day[currentDate.getDay()];

console.log(  currentDate.getDate() + "-" 
             + currentDate.getMonth() + "-" 
             + currentDate.getFullYear() + "(" 
            +dayName + ")");