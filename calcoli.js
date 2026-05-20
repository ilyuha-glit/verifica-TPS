function Sconto(importo, percentuale) {
    return importo * (percentuale / 100);
}

function IVA(importo, percentualeIVA) {
    return importo * (percentualeIVA / 100);
}

module.exports = {
    Sconto,
    IVA
};
