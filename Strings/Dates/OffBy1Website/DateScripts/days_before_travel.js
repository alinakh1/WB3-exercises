"use strict"

window.onload = init;

function init() {
    const submitButton = document.getElementById("submitButton");
    submitButton.onclick = submitButtonOnClick;
}

function submitButtonOnClick() {
    const dateInput = document.getElementById("dateInput");
    let newValueString = dateInput.value;

    let travelDate = new Date(newValueString);
    console.log(travelDate.toString());

    let currentDate = new Date();

    let msec_per_day = 1000 * 60 * 60 * 24;

    let elapsedMillisec = travelDate.getTime() - currentDate.getTime();

    let dayBeforeTravel = elapsedMillisec / msec_per_day;

    let daysBeforeTravel = Math.round(dayBeforeTravel);
    console.log("Your trip is in  " + daysBeforeTravel);



    //dateField.innerHTML = date;

    let output = document.getElementById("output");
    output.innerHTML = "Your trip is in " + daysBeforeTravel + " days";
}
