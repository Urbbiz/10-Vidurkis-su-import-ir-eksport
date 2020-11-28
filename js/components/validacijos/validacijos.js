function arPrasmingasSarasas(sarasas){
    if(!Array.isArray(sarasas)) {           /* jeigu skaiciu sarasas NERA Array tipo */
        console.error('ERROR: duotas ne array ')
        return false;
    }
    if(sarasas.length=== 0) {
        console.error('ERROR; duotas array yra tuscias');
        return false;
    }
    return true 
}
function arNormalusSkaicius(skaicius, tikrinamoObjektoPavadinimas) {

    if(typeof tikrinamoObjektoPavadinimas !== 'string') {
        console.warn('WARNING: skaiciaus tipo tikrinimui nera duotas tikrinamo objekto pavadinimas')
        tikrinamoObjektoPavadinimas = 'reiksme/objektas'

    }
    if(typeof skaicius !== 'number') {    
        console.error(`ERROR: gautas ${tikrinamoObjektoPavadinimas} nera skaiciaus tipo`);
        return false;
    }
    
    if(!isFinite(skaicius)) {    /* su siuo isFinite()  priciumpamos begalybes ir NaN */
        console.error(`ERROR: gautas ${tikrinamoObjektoPavadinimas}  nera tikrasis skaicius`);
        return false;
    }
    return true;
}
export{arPrasmingasSarasas, arNormalusSkaicius}