
//Making first name Brenda Kaye

let name = "Brenda Kaye";

let pos = name.indexOf(" ");
console.log("Name: " + name);

let first = name.substring(0, 6);
let last = name.substring (7, 11);
console.log("first name: " + first);
let lastName = `Last Name: ${last}`;
console.log(lastName);

//Second name Ian Auston
let nameIan = "Ian Auston";

let posIan = nameIan.indexOf(" ");
console.log("Name: " + nameIan);
console.log(posIan);

let firstIan = nameIan.substring(0, 3);
let lastIan = nameIan.substring (4, 10);
console.log("first name: " + firstIan);
let lastNameIan = `Last Name: ${lastIan}`;
console.log(lastNameIan);

//Third name Siddalee Grace
let nameGrace = "Siddalee Grace";

let posGrace = nameGrace.indexOf(" ");
console.log("Name: " + nameGrace);
console.log(posGrace);
let lastOfGrace = nameGrace.lastIndexOf("e");
console.log(lastOfGrace);

let firstGrace = nameGrace.substring(0, 7);
let lastGrace = nameGrace.substring (9, 14);
console.log("first name: " + firstGrace);
let lastNameGrace = `Last Name: ${lastGrace}`;
console.log(lastNameGrace);