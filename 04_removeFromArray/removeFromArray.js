const removeFromArray = function(array , ...nums) {

    
    nums.forEach( (num) => {
        for (let i = 0; i < array.length; i++) {
            if(array[i] === num){
                array.splice(i,1);
                i--;
            };  
        }
    })
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;