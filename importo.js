let r=require("./calcoli.js");

let importo=Number(process.argv[2]); 
let percentuale=  Number(process.argv[3]);

let importoIVA=Number(process.argv[4]); 
let percentualeIVA =  Number(process.argv[5]);


console.log("Sconto: "+r.Sconto(importo, percentuale));
console.log("Iva: "+r.IVA(importoIVA, percentualeIVA));


