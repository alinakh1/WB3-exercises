
function firstIsBrenda() {

    let name = "Brenda Kaye";
    console.log("Name: " + name);
    let pos = name.indexOf(" ");

    let first = name.substring(0, 6);
    console.log("First Name: " + first);


    let last = name.substring(7, 11);
    let lastName = `Last Name: ${last}`;
    console.log(lastName);
}

firstIsBrenda();


function firstIsIan() {

    let name = "Ian Auston";
    console.log("Name: " + name);
    let pos = name.indexOf(" ");
    console.log(pos);

    let first = name.substring(0, 3);
    console.log("First Name: " + first);


    let last = name.substring(4, 10);
    let lastName = `Last Name: ${last}`;
    console.log(lastName);
}

firstIsIan();


function firstIsSiddalee() {

    let name = "Siddalee Grace";
    console.log("Name: " + name);
    let pos = name.indexOf(" ");
    console.log(pos);
    let lastPos = name.lastIndexOf("e");
    console.log(lastPos);

    let first = name.substring(0, 7);
    console.log("First Name: " + first);


    let last = name.substring(9, 13);
    let lastName = `Last Name: ${last}`;
    console.log(lastName);
}

firstIsSiddalee();



//let supplierCode = "ACME";
//let productName = "123";
//let size = "L";

