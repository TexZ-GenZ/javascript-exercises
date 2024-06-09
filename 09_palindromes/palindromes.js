const reverseString = function(string) {

    let reversedString = '';

    for (let i = string.length -1; i >= 0; i--) {
        
        reversedString += string[i];
        
    }

    return reversedString;

};

const palindromes = function (str) {
    
    str = str.toLowerCase();
    str = str.split('');

    for (let i = 0; i < str.length; i++) {
        
        if (str[i] == ',' || str[i] == ' ' || str[i] == '!' || str[i] == '.') {
            str.splice(i,1);
            i--;
        }
    }
    reversedString = reverseString(str);

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== reversedString[i]) {
            return false;
        }
    }
    return true;
    
}   

// Do not edit below this line
module.exports = palindromes;
