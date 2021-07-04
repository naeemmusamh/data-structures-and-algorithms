let string1 = 'musamh nae em';
let string2 = 'muhe aenm sam';

function checkString(string1, string2){
    string1 = string1.split(' ').sort().join('');
    string2 = string2.split(' ').sort().join('');

    let a = string1.split('').sort().join('');
    let b = string2.split('').sort().join('');

    let str1 = string1.split(' ').join('').length;
    let str2 = string2.split(' ').join('').length;

    if(str1 === str2){
        if(a === b){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

checkString(string1, string2);