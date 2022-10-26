
//Created "FuNcTiOn" for name = Cher

function parseAndDisplayCher() {

    let name = "Cher";
    console.log("Name: " + name);
    let pos = name.indexOf("Cher");
    console.log(pos);

    let onlyName = name.substring(0, 4);
    console.log("Only Name: " + onlyName);
}

parseAndDisplayCher();


function parseAndDisplayBrenda() {

    let name = "Brenda Kaye";
    console.log("Name: " + name);
    let pos = name.indexOf(" ");

    let first = name.substring(0, 6);
    console.log("First Name: " + first);


    let last = name.substring(7, 11);
    let lastName = `Last Name: ${last}`;
    console.log(lastName);
}

parseAndDisplayBrenda();


function parseAndDisplayDana() {

    let name = "Dana Lynn Wyatt";
    console.log("Name: " + name);
    let pos = name.indexOf(" ");
    console.log(pos);
    let lastPos = name.lastIndexOf("t");
    console.log(lastPos);

    let first = name.substring(0, 4);
    console.log("First Name: " + first);

    let middle = name.substring(5, 9);
    let posMiddle = name.indexOf("L");
    let posMiddle1 = name.lastIndexOf(" ");
    console.log(posMiddle,posMiddle1);
    let middleName = `Middle Name: ${middle}`;
    console.log(middleName);


    let last = name.substring(10, 15);
    let lastName = `Last Name: ${last}`;
    console.log(lastName);
}

parseAndDisplayDana();