// Given an array remove any duplicate members

const removeDuplicate = (arr) => {
    let result = [];
    
    for(i=0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
};


console.log(removeDuplicate([1,5,6,3,5,2,1,9,5]))