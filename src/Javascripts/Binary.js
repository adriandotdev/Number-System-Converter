"use strict"

function toDecimal(binary) {

    let myBinary = Array.from(binary)
    const BASE = 2;
    let pow = 0;
    let decimal = 0;

    for (let i = myBinary.length - 1; i >= 0; i--) {

        let bit = myBinary[i]

        if (bit === '1')
            decimal += Math.pow(BASE, pow)

        pow++
    }


    return decimal === 0 ? '' : decimal
}

function toOctal(binary) {

    let decimalValue = toDecimal(binary)
    let octal = '';

    while (decimalValue > 0) {

        octal += String(decimalValue % 8);
        decimalValue = Math.trunc(decimalValue/8)
    }

    function reverse(octal) {

        let reverseValue = ''

        for (let i = octal.length - 1; i >= 0; i--) {
            reverseValue += octal[i];
        }

        return reverseValue
    }
    return reverse(octal);
}

function getHex(decimal) {

    switch(decimal) {
        case 10: return 'A'; 
        case 11: return 'B'; 
        case 12: return 'C';
        case 13: return 'D';
        case 14: return 'E'; 
        case 15: return 'F';  
    }
    return decimal;
}

function toHexadecimal(binary) {

    function sliceToBinary() {

        let divided = []
        let currArray = []

        for (let i = binary.length - 1; i >= 0; i-=4) {

            currArray = []

            for (let j = i; j >= (i-3); j--) {

                if (binary[j] === undefined)
                    break;

                currArray.push(binary[j])
            }
            
            divided.push(currArray)
        }
        return divided
    }
    
    let hexadecimalValue = ''
    let divided = sliceToBinary()

    for (let i = divided.length - 1; i >= 0; i--) {

        hexadecimalValue += getHex(toDecimal(divided[i].reverse()))    
    }
    return hexadecimalValue
}

export {toDecimal, toOctal, toHexadecimal};