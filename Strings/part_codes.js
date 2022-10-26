
// //exaple from a workbook3
// let partCode = "27565643-large";
// let partNum, size;
// let dashPos = partCode.indexOf("-");
// partNum = partCode.substring(0, dashPos);
// size = partCode.substring(dashPos + 1);
// console.log(partNum, size); 

//supplierCode:productNumber-size

let codeA = "ACME:123-L";
let prodName, prodNum, size1;

let colPos = codeA.indexOf(":");
prodName = codeA.substring(0,colPos);

let dashPosi = codeA.indexOf("-");
prodNum = codeA.substring(colPos + 1, dashPosi);
size1 = codeA.substring(dashPosi + 1);

console.log("Product name " + prodName + "," + prodNum + "," + size1);


//supplier DI

let codeB = "DI:12345-M";
let produName, produNum, size2;

let coluPos = codeB.indexOf(":");
produName = codeB.substring(0,coluPos);

let dashPosit = codeB.indexOf("-");
produNum = codeB.substring(coluPos + 1, dashPosit);
size2 = codeB.substring(dashPosit + 1);

console.log(produName,produNum, size2);

//supplier ACE

let codeC = "ACE:1-12";
let productName, productNum, size3;

let columnPos = codeC.indexOf(":");
productName = codeC.substring(0,columnPos);

let dashPosition = codeC.indexOf("-");
productNum = codeC.substring(columnPos + 1, dashPosition);
size3 = codeC.substring(dashPosition + 1);

console.log(productName,productNum, size3);

