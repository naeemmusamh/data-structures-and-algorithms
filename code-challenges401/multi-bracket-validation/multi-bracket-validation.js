'use strict';

const inValid = string => {
    //check if the string is odd number or not if odd continua if not return false
    if (string.length % 2 !== 0) return false;
    //check if the string have the open and close pricket in side the string if yeah return true if not it will return false
    while (string.includes('{}') || string.includes('()') || string.includes('[]')) {
        string = string.replace('{}', '').replace('()', '').replace('[]', '');
    }
    return string === '';
};

console.log(inValid('{}'));
console.log(inValid('{}(){}'));
console.log(inValid('()[[]]'));
console.log(inValid('(){}[[]]'));
console.log(inValid('{}{}[](())'));
console.log(inValid('[({}]'));
console.log(inValid('(]('));
console.log(inValid('{(})'));