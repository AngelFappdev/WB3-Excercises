// function displaygetSocSecTax(x){
//     let sectax = x * 0.0062;
//     return sectax;
    
// } 
// let sectax = displaygetSocSecTax(1000);
// console.log(sectax);

// function displaygetMedicareTax(x){
//     let meditax = x * 0.0145;
//     return meditax
// }
// let meditax = displaygetMedicareTax(4000)
// console.log(meditax)


function getFederalTax(gross, code){
    let rate = 0.23;
    if(code === 1){
        rate = 0.21
    }
    else if(code === 2){
        rate = 0.195
    }
    else if (code === 18){
        rate = 0.185
    }
    else if (code >= 4){
        rate = 0.18 - (0.05 * (code - 4))
    }

    console.log(rate);
    return rate * gross 
}
console.log("person 1, Gross pay $750, withholdingcode: 0, tax:" , getFederalTax(750,0))
console.log("person 2, Gross pay $1550, withholdingcode: 2, tax:" , getFederalTax(1550,2))
console.log("person 3, Gross pay $1100, withholdingcode: 6 tax:" , getFederalTax(1100,6))

