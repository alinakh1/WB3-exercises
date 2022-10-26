"use strict"

let birthday = new Date("03/14/1997");
console.log("My birthday is " + birthday.toLocaleString());

let momsBirthday = new Date("jun 08 1974");
console.log("My mom's birthday is " + momsBirthday.toLocaleDateString());

let dadsBirthday = new Date("1967 11 8");
console.log("My dad's birthday is " + dadsBirthday.toLocaleString());

