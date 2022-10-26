"use strict"

window.onload = init;

function init()
{
    const convertButton = document.getElementById("convertButton");
    convertButton.onclick = convertButtonOnClick;
}

function convertButtonOnClick(){
    const dateInput = document.getElementById("dateInput");
    let newValueString = dateInput.value;

    let date = new Date (newValueString);
    console.log(date.toString());

   let dateField = document.getElementById("dateField");
   dateField.value = date; 
   //dateField.innerHTML = date;

   let output = document.getElementById("output");
   output.innerHTML = date;
}
