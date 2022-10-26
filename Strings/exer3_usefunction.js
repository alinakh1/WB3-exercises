"use strict"


// let code1 = "ACME:123-L";
// function getSupplierCode(){
//     let dashPos = code1.indexOf("-");
//     let colPos = code1.indexOf(":");
//     let supplierCode = code1.substring(0, colPos);
//     console.log("Supplier Code: " + supplierCode);
//     function getProductNumber(){
        
//         let productNumber = code1.substring(colPos +1, dashPos);
//         console.log("Product Number: " + productNumber)
//     }
//     getProductNumber();
//     function getSize(){
//         let size = code1.substring(dashPos + 1);
//         console.log("Size: " + size);
//     }
//     getSize();
// }
// console.log(code1);
// getSupplierCode();

////////////////////////////////

function getSupplierCode(fullproductcode){
    let colPos = code1.indexOf(":");
    let supplierCode = code1.substring(0, colPos);
    return supplierCode;
}

function getProductNumber(fullproductcode){
    let dashPos = code1.indexOf("-");
    let colPos = code1.indexOf(":");
    let productNumber = code1.substring(colPos +1, dashPos);
    return productNumber;
}

function getProductSize(fullproductcode){
    let dashPos = code1.indexOf("-");
    let size = code1.substring(dashPos + 1);
    return size;
}


let code1 =  "ACME:123-L";
let supplierCode = getSupplierCode(code1);
console.log(supplierCode);

let productNumber = getProductNumber(code1);
console.log(productNumber);

let productSize = getProductSize(code1);
console.log(productSize);