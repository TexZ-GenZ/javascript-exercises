const repeatString = function(string,num) {
    let repeatedString = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let index = 0; index < num; index++) {
        repeatedString += string; 
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
